# AppBox.getAddressBar

AppBox.getAddressBar
-


# AppBox.getAddressBar


## Синтаксис


getAddressBar();


## Описание


Метод getAddressBar возвращает
 адресную строку веб-приложения «Форсайт. Аналитическая платформа».


## Комментарии


Метод возвращает значение типа [PP.Application.AddressBar](../AddressBar/AddressBar.htm).


## Пример


Для выполнения примера откройте веб-приложение «Форсайт. Аналитическая платформа».


Зададим высоту адресной строки:


// Получим контейнер приложения
var appBox = PP.App.getAppBox();
// Получим адресную строку
var addressBar = appBox.getAddressBar();
// Зададим высоту адресной строки
addressBar.setHeight(20);
После выполнения примера была изменена высота адресной строки.


См. также:


[AppBox](AppBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
