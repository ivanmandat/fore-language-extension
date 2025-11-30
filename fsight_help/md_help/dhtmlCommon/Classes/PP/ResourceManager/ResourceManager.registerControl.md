# ResourceManager.registerControl

ResourceManager.registerControl
-


# ResourceManager.registerControl


## Синтаксис


registerControl(control: [PP.Ui.Control](dhtmlUi.chm::/Classes/control/control.htm));


## Параметры


control. Элемент управления,
 который необходимо зарегистрировать в менеджере ресурсов.


## Описание


Метод registerControl регистрирует
 элемент управления в менеджере ресурсов.


## Комментарии


Локализация зарегистрированного элемента управления при смене текущего
 языка будет производиться менеджером ресурсов автоматически.


## Пример


Для выполнения примера необходимо создать html-страницу и в теге <head>
 добавить ссылки на файлы PP.js и PP.css. В родительском каталоге для текущей
 корневой папки должна быть размещена папка с файлами ресурсов resources.
 Загрузим на страницу ресурсы для русского и английского языка, а также
 добавим на страницу кнопку с заданным ресурсным ключом:


// Укажем путь к корневой папке, содержащей файлы ресурсов
PP.resourceManager.setRootResourcesFolder("../resources/", false);
// Установим адрес сервиса, управляющего ресурсами
PP.resourceManager.setResourceHandler("PPService.axd?action=pack");
// Загрузим ресурсы для русского и английского языка
PP.resourceManager.load("PP, Express", PP.Cultures.ru);
PP.resourceManager.load("PP, Express", PP.Cultures.en);
// Создадим кнопку
var button = new PP.Ui.Button({
    Width: 70,
    Height: 22,
});
// Добавим кнопку на документ
document.body.appendChild(button.getDomNode());
// Установим в качестве текущего русский язык
PP.setCurrentCulture(PP.Cultures.ru);
// Установим ресурсный ключ для кнопки
button._ResourceKey = "wCancel";
// Зарегистрируем кнопку в менеджере ресурсов
PP.resourceManager.registerControl(button);
В результате выполнения примера на страницу были загружены ресурсы для
 русского и английского языка, а также была добавлена кнопка с ресурсным
 ключом «wCancel»:


![](ResourceManager_registerControl1.png)


Теперь установим в качестве текущего английский язык и обновим все элементы
 управления, зарегистрированные в менеджере ресурсов:


// Установим в качестве текущего английский язык
PP._currentCulture = PP.Cultures.en;
// Обновим все элементы управления, зарегистрированные в менеджере ресурсов
PP.resourceManager.refreshControls();
После выполнения указанного сценария надпись на кнопке была автоматически
 переведена на английский язык:


![](ResourceManager_registerControl2.png)


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
