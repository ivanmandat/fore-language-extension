# ContactInfo.getAddressLabel

ContactInfo.getAddressLabel
-


# ContactInfo.getAddressLabel


## Синтаксис


getAddressLabel();


## Описание


Метод getAddressLabel возвращает
 объект надписи адреса.


## Пример


Для выполнения примера в теге <head> html-страницы добавьте ссылки
 на js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.App.js;


	- PP.css;


	- PP.App.css;


	- App.resources.ru.js.


В теге <body> добавьте атрибут onload:


<body onload="Ready()">
</body>
В теге <script> добавьте скрипт для создания класса ContactInfo
 и получения данных об элементе:


function Ready() {
    // Зададим настройки
    settings = {
        Address: "Perm",
        PhoneNumbers: ["82736"],
        FaxNumbers: ["823763"],
        MailAddress: ["support@fsight.ru"],
        Site: "http://www.fsight.ru",
    }
    // Создадим класс
    contact = new PP.Application.ContactInfo(settings);
    // Получим объекты контактов
    console.log(contact.getAddressLabel());
    console.log(contact.getMailHyperLink());
    console.log(contact.getPhonesLabel());
    console.log(contact.getSiteHyperLink());
    // Вызовем диалог, содержащий контактные данные
    about = new PP.Application.AboutBox({
        ContactInfo: contact
    });
    // Отобразим диалог
    about.show();
}
После выполнения примера на странице будет отображен диалог «[О программе](../../../Components/AboutBox/AboutBox.htm)»,
 в консоль выведена информация контактных данных.


См. также:


[ContactInfo](ContactInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
