# Конструктор NativeDelegate

Конструктор NativeDelegate
-


# Конструктор NativeDelegate


## Синтаксис


PP.NativeDelegate(func: Function, context: Object,
 args: Object, params: Object)


## Параметры


func. Обработчик
 события;


context.
 Элемент управления, для события которого устанавливается обработчик;


args.
 Аргументы события;


params.
 Параметры события.


## Описание


Конструктор NativeDelegate создает
 экземпляр класса [NativeDelegate](NativeDelegate.htm).


## Пример


Для выполнения примера необходимо в теге <head> html-страницы
 добавить ссылки на файл сценария PP.js и файл стилей PP.css, в теге <body>
 для атрибута onload указать значение
 «ready()». Создадим
 кнопку и добавим обработчик события нажатия кнопки мыши:


var button;
function createButton() {
    // Создаем кнопку
    button = new PP.Ui.Button({
        // Устанавливаем родительскую вершину
        ParentNode: document.body,
        // Устанавливаем содержимое кнопки
        Content: "Кнопка"
    });
}
// Обрабатываем событие нажатия на кнопку
function onClick(sender, args) {
    console.log("Произошло нажатие на кнопку")
}
function ready() {
    // Создаём кнопку
    this.createButton();
    // Создаем настройки для обработчика события нажатия на кнопку мыши
    var setting = {
        // Указываем элемент управления, для события которого устанавливается обработчик
        ParentControl: button,
        // Устанавливаем наименование обработчика события
        HandleName: button.Click.getHandleName(),
        // Устанавливаем наименование события, для которого устанавливается обработчик
        NativeEvent: button.Click.getNativeEvent(),
        // Указываем, что событие не будет генерироваться с помощью касания соответствующего элемента управления
        IsTouchDisabled: true
    };
    // Создаем обработчик события нажатия кнопки мыши
    var delegate = new PP.NativeDelegate(onClick, this, null, setting);
    // Добавляем обработчик события нажатия на кнопку
    delegate.add(onClick, button);
    button.Click = delegate;
}
После нажатия на кнопку мыши в консоли браузера было выведено соответствующее
 сообщение:


Произошло нажатие на кнопку


См. также:


[NativeDelegate](NativeDelegate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
