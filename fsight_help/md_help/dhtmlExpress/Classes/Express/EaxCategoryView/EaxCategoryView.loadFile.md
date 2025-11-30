# EaxCategoryView.loadFile

EaxCategoryView.loadFile
-


# EaxCategoryView.loadFile


## Синтаксис


loadFile(fileName: String, callback: PP.Delegate,
 argumentss: Object);


## Параметры


fileName. Адрес загружаемого
 скрипта;


callback. Возвратная функция,
 выполняемая после загрузки сценария JavaScript;


argumentss. Аргументы загрузки.


## Описание


Метод loadFile загружает файл
 сценария JavaScript.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Загрузим файл сценария JavaScript
 с наименованием «PP.TagCloud.js»:


// Получаем представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Загружаем файл
category.loadFile("../build/PP.TagCloud.js", function(sender, args) {
    console.log("Файл успешно загружен");
});
После загрузки файла сценария в консоль было выведено сообщение об успешном
 окончании:


Файл успешно загружен


Проверим существование класса PP.Ui.TagCloud:


// Проверяем существование класса PP.Ui.TagCloud
if (PP.Ui.TagCloud) {
    console.log("Класс существует");
} else {
    console.log("Класс отсутствует");
}
В результате в консоль будет выведен результат проверки наличия класса:


Класс существует


См.
 также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
