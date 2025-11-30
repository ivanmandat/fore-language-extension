# IOleDocumentBox.UserMode

IOleDocumentBox.UserMode
-


# IOleDocumentBox.UserMode


## Синтаксис


UserMode: Boolean;


## Описание


Свойство UserMode определяет
 режим работы с объектом, загруженным в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


## Комментарии


По умолчанию свойству установлено значение True,
 при этом работа с объектом, загруженным в контейнер, осуществляется в
 конечном режиме, доступны все функции необходимые пользователю. Если свойству
 установлено значение False, то
 при работа с объектом осуществляется в режиме проектирования, при этом
 доступны свойства и методы которые необходимы разработчику, но не нужны
 конечному пользователю.


## Пример


Для выполнения примера, предполагается наличие формы, расположенной
 на ней кнопки с наименованием Button1 и компонента OleDocumentBox с наименованием
 OleDocumentBox1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    OleDocumentBox1.CreateObject("RICHTEXT.RichtextCtrl");

    OleDocumentBox1.UserMode := False;

    OleDocumentBox1.OleObject.SetProperty("ScrollBars", 3);

    OleDocumentBox1.OleObject.SetProperty("RightMargin", 1000);

    OleDocumentBox1.OleObject.SetProperty("Appearance", 0);

    OleDocumentBox1.OleObject.SetProperty("BorderStyle", 0);

    OleDocumentBox1.UserMode := True;

End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, в контейнер OleDocumentBox
 будет загружен компонент Richtext и для него будут изменены некоторые
 базовые свойства, отвечающие за оформление компонента.


См. также:


[IOleDocumentBox](IOleDocumentBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
