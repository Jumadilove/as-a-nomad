import { langs } from "./langs.js"

$(function() {
    $('.rev_slider').slick({
        arrows: true,
        dots: true
    })
})


const contacts = document.querySelector(".header__contacs")
const langBlock = document.querySelector(".header__lang")

const modalOne = document.querySelector(".modal__contacts")
const modalTwo = document.querySelector(".modal__lang")

contacts.addEventListener('click', () => {
    modalTwo.classList.remove('activeOne')

    modalOne.classList.toggle('activeOne')
    contacts.prepend(modalOne)
})

langBlock.addEventListener('click', () => {
    modalOne.classList.remove('activeOne')

    modalTwo.classList.toggle('activeOne')
    langBlock.prepend(modalTwo)
})

const mainD = document.querySelector(".main__d_one")
const mainDTwo = document.querySelector(".main__d_two")

const mainHOne = document.querySelector(".main__h_one")
const mainPOne = document.querySelector(".main__p_one")

const mainHTwo = document.querySelector(".main__h_two")
const mainPTwo = document.querySelector(".main__p_two")
    const mainLOne = document.querySelector(".main__l_one")
    const mainLTwo = document.querySelector(".main__l_two")
    const mainLThre = document.querySelector(".main__l_thre")
    const mainLFour = document.querySelector(".main__l_four")
    const mainLFIve = document.querySelector(".main__l_five")
    const mainLSix = document.querySelector(".main__l_six")
const mainPFour = document.querySelector(".main__p_four")

const mainHThre = document.querySelector(".main__h_thre")
const mainPFive  = document.querySelector(".main__p_five")
    const mainTOne = document.querySelector(".main__t_one")
    const mainTTwo = document.querySelector(".main__t_two")
    const mainTThre = document.querySelector(".main__t_thre")
    const mainTFour = document.querySelector(".main__t_four")
    const mainTFive = document.querySelector(".main__t_five")
    const mainTSix = document.querySelector(".main__t_six")
    const mainTSeven = document.querySelector(".main__t_seven")
const mainPSix = document.querySelector(".main__p_six")

const mainPSeven = document.querySelector(".main__p_seven")
const mainLSeven = document.querySelector(".main__l_seven")
const mainLEight = document.querySelector(".main__l_eight")
const mainLNine = document.querySelector(".main__l_nine")
const mainLTen = document.querySelector(".main__l_ten")
const mainLEleve = document.querySelector(".main__l_eleven")
const mainLTwelw = document.querySelector(".main__l_twelw")
const mainLTherteen = document.querySelector(".main__l_therteen")
const mainLFourteen = document.querySelector(".main__l_fourteen")
const mainPEight = document.querySelector(".main__p_eight")



const langRU = document.querySelector(".russ")
const langKG = document.querySelector(".kyrg")
const langEN = document.querySelector(".engl")

langKG.addEventListener('click', () => {
        mainD.innerText = langs.main__d_one.kg
        mainDTwo.innerText = langs.main__d_two.kg
        mainHOne.innerText = langs.main__h_one.kg
        mainPOne.innerText = langs.main__p_one.kg
        mainHTwo.innerText = langs.main__h_two.kg
        mainPTwo.innerText = langs.main__p_two.kg
        mainLOne.innerText = langs.main__l_one.kg
        mainLTwo.innerText = langs.main__l_two.kg
        mainLThre.innerText = langs.main__l_thre.kg
        mainLFour.innerText = langs.main__l_four.kg
        mainLFIve.innerText = langs.main__l_five.kg
        mainLSix.innerText = langs.main__l_six.kg
        mainPFour.innerText = langs.main__p_four.kg
        mainHThre.innerText = langs.main__h_thre.kg
        mainPFive.innerText = langs.main__p_five.kg
        mainTOne.innerText = langs.main__t_one.kg
        mainTTwo.innerText = langs.main__t_two.kg
        mainTThre.innerText = langs.main__t_thre.kg
        mainTFour.innerText = langs.main__t_four.kg
        mainTFive.innerText = langs.main__t_five.kg
        mainTSix.innerText = langs.main__t_six.kg
        mainTSeven.innerText = langs.main__t_seven.kg
        mainPSix.innerText = langs.main__p_six.kg
        mainPSeven.innerText = langs.main__p_seven.kg
        mainLSeven.innerText = langs.main__l_seven.kg 
        mainLEight.innerText = langs.main__l_eight.kg
        mainLNine.innerText = langs.main__l_nine.kg
        mainLTen.innerText = langs.main__l_ten.kg
        mainLEleve.innerText = langs.main__l_eleven.kg
        mainLTwelw.innerText = langs.main__l_twelw.kg
        mainLTherteen.innerText = langs.main__l_therteen.kg
        mainLFourteen.innerText = langs.main__l_fourteen.kg
        mainPEight.innerText = langs.main__p_eight.kg
})

langRU.addEventListener('click', () => {
        mainD.innerText = langs.main__d_one.ru
        mainDTwo.innerText = langs.main__d_two.ru
        mainHOne.innerText = langs.main__h_one.ru
        mainPOne.innerText = langs.main__p_one.ru
        mainHTwo.innerText = langs.main__h_two.ru
        mainPTwo.innerText = langs.main__p_two.ru
        mainLOne.innerText = langs.main__l_one.ru
        mainLTwo.innerText = langs.main__l_two.ru
        mainLThre.innerText = langs.main__l_thre.ru
        mainLFour.innerText = langs.main__l_four.ru
        mainLFIve.innerText = langs.main__l_five.ru
        mainLSix.innerText = langs.main__l_six.ru
        mainPFour.innerText = langs.main__p_four.ru
        mainHThre.innerText = langs.main__h_thre.ru
        mainPFive.innerText = langs.main__p_five.ru
        mainTOne.innerText = langs.main__t_one.ru
        mainTTwo.innerText = langs.main__t_two.ru
        mainTThre.innerText = langs.main__t_thre.ru
        mainTFour.innerText = langs.main__t_four.ru
        mainTFive.innerText = langs.main__t_five.ru
        mainTSix.innerText = langs.main__t_six.ru
        mainTSeven.innerText = langs.main__t_seven.ru
        mainPSix.innerText = langs.main__p_six.ru
        mainPSeven.innerText = langs.main__p_seven.ru
        mainLSeven.innerText = langs.main__l_seven .ru
        mainLEight.innerText = langs.main__l_eight.ru
        mainLNine.innerText = langs.main__l_nine.ru
        mainLTen.innerText = langs.main__l_ten.ru
        mainLEleve.innerText = langs.main__l_eleven.ru
        mainLTwelw.innerText = langs.main__l_twelw.ru
        mainLTherteen.innerText = langs.main__l_therteen.ru
        mainLFourteen.innerText = langs.main__l_fourteen.ru
        mainPEight.innerText = langs.main__p_eight.ru
})

langEN.addEventListener('click', () => {
        mainD.innerText = langs.main__d_one.en
        mainDTwo.innerText = langs.main__d_two.en
        mainHOne.innerText = langs.main__h_one.en
        mainPOne.innerText = langs.main__p_one.en
        mainHTwo.innerText = langs.main__h_two.en
        mainPTwo.innerText = langs.main__p_two.en
        mainLOne.innerText = langs.main__l_one.en
        mainLTwo.innerText = langs.main__l_two.en
        mainLThre.innerText = langs.main__l_thre.en
        mainLFour.innerText = langs.main__l_four.en
        mainLFIve.innerText = langs.main__l_five.en
        mainLSix.innerText = langs.main__l_six.en
        mainPFour.innerText = langs.main__p_four.en
        mainHThre.innerText = langs.main__h_thre.en
        mainPFive.innerText = langs.main__p_five.en
        mainTOne.innerText = langs.main__t_one.en
        mainTTwo.innerText = langs.main__t_two.en
        mainTThre.innerText = langs.main__t_thre.en
        mainTFour.innerText = langs.main__t_four.en
        mainTFive.innerText = langs.main__t_five.en
        mainTSix.innerText = langs.main__t_six.en
        mainTSeven.innerText = langs.main__t_seven.en
        mainPSix.innerText = langs.main__p_six.en
        mainPSeven.innerText = langs.main__p_seven.en
        mainLSeven.innerText = langs.main__l_seven.en
        mainLEight.innerText = langs.main__l_eight
        mainLNine.innerText = langs.main__l_nine.en
        mainLTen.innerText = langs.main__l_ten.en
        mainLEleve.innerText = langs.main__l_eleven.en
        mainLTwelw.innerText = langs.main__l_twelw.en
        mainLTherteen.innerText = langs.main__l_therteen.en
        mainLFourteen.innerText = langs.main__l_fourteen.en
        mainPEight.innerText = langs.main__p_eight.en
})

new WOW().init();