const body = document.querySelector('body')
const kodeGreen = "51,255,0";
const kodeBlue = "0,102,255";
const kodeYellow = "255,255,0";
const kodeMagenta = "204,0,255";
const kodeCyan = "0,255,255";
const kodeRed = "255,0,0";
const kodeWhite = "208,208,208";
var experienceArray = []

const toggleInputControl = currentControl => {
    let controlValue = $(currentControl).is(":checked")
    let controlInput = $(currentControl).closest(".form-group").find(".form-control")

    let toggle = controlValue ? (
        controlInput.attr("disabled",false)
    ) : (
        controlInput.attr("disabled",true)
    );
}

const addExperience = currentForm => {
    let form = $(currentForm).closest(".experience-form")
    let objectCompany = $(form).find("#f-empresa").val()
    let objectRole = $(form).find("#f-puesto").val()
    let objectDescription = $(form).find("#f-descripcion").val()
    let objectFromYear = $(form).find("#f-desde").val()
    let objectToYear = $(form).find("#f-hasta").val()
    let experienceObject = {objectCompany,objectRole,objectDescription,objectFromYear,objectToYear}
    experienceArray.push(experienceObject)
    $(form).find("input").val("")
    printExperience(".experience-wrapper",experienceObject)
}

const addStudies = currentForm => {
    let form = $(currentForm).closest(".experience-form")
    let objectCompany = $(form).find("#f-empresa").val()
    let objectRole = $(form).find("#f-puesto").val()
    let objectDescription = $(form).find("#f-descripcion").val()
    let objectFromYear = $(form).find("#f-desde").val()
    let objectToYear = $(form).find("#f-hasta").val()
    let experienceObject = {objectCompany,objectRole,objectDescription,objectFromYear,objectToYear}
    experienceArray.push(experienceObject)
    $(form).find("input").val("")
    printExperience(".experience-wrapper",experienceObject)
}

const printExperience = (experienceWrapper,obj) => {
    $(experienceWrapper).append(
        `<div class="experience-tag p-2 mr-2 mt-2">${obj.objectCompany}</div>`
    )
}

const changeColorSchema = schema => {
    switch (schema) {
        case "schema1":
            console.log("esquema 1");
            document.documentElement.style.setProperty(`--primary-color`, kodeMagenta);
            document.documentElement.style.setProperty(`--secondary-color`, kodeBlue);
            break;

        case "schema2":
            console.log("esquema 2");
            document.documentElement.style.setProperty(`--primary-color`, kodeYellow);
            document.documentElement.style.setProperty(`--secondary-color`, kodeGreen);
            break;

        case "schema3":
            document.documentElement.style.setProperty(`--primary-color`, kodeMagenta);
            document.documentElement.style.setProperty(`--secondary-color`, kodeRed);
            break;

        case "schema4":
            console.log("esquema 4");
 			document.documentElement.style.setProperty(`--primary-color`, kodeGreen);
            document.documentElement.style.setProperty(`--secondary-color`, kodeYellow);
             break;

        case "schema5":
            console.log("esquema 5");
 			document.documentElement.style.setProperty(`--primary-color`, kodeGreen);
            document.documentElement.style.setProperty(`--secondary-color`, kodeBlue);
            break;
    }
}

const togglePalette = btn => {
	$(btn).siblings(".selectors-wrapper").toggleClass("active")
}
