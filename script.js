const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const FormComponent = class {
    constructor() {
        this.statusSelect = document.querySelector('select[name="status"]')
        this.sucessInput = document.querySelector('input[name="success"]')
        this.statusSelect.addEventListener("change" , this.StatusChangeHandler.bind(this))
        this.Form = document.querySelector("form")
        this.Form.addEventListener("submit" , this.FormSubmitHandler.bind(this))
        this.Output = document.querySelector('.output');
    }
    LoadSelectOption () {
        oppoStatus.forEach(status=> {
            const option = document.createElement("option")
            option.value = status.K_OPPO_STATUS 
            option.text = status.STATUS
            this.statusSelect.append(option)
        })
    }
    StatusChangeHandler (event) {
          const valueSelected =   Number(event.target.value)

          oppoStatus.forEach(status=> {
                if(status.K_OPPO_STATUS === valueSelected) {
                
                  this.sucessInput.value = status.SUCCESS
                }
          })

    }
    getStatusValue (value) {
        const status =  oppoStatus.find(status=>status.K_OPPO_STATUS === Number(value))
        if(status)   return { 
            status : status["K_OPPO_STATUS"] ,
            success : status["SUCCESS"]
        }

        return {}
    }
    FormSubmitHandler (event) {
        event.preventDefault()
        const data = JSON.stringify(this.getStatusValue(this.statusSelect.value))
        this.Output.innerHTML =data

    }
    start() {
        this.LoadSelectOption()
    }
  }
  
  const fc = new FormComponent();
  fc.start();