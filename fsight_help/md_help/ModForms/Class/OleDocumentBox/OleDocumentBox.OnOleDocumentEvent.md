# OleDocumentBox.OnOleDocumentEvent

OleDocumentBox.OnOleDocumentEvent
-


# OleDocumentBox.OnOleDocumentEvent


## Синтаксис


OnOleDocumentEvent(Sender: [IOleDocumentBox](../../Interface/IOleDocumentBox/IOleDocumentBox.htm);
 Args: [IOleDocumentBoxEventArgs](../../Interface/IOleDocumentBoxEventArgs/IOleDocumentBoxEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnOleDocumentEvent наступает,
 если происходит какое либо событие у объекта, загруженного в компонент
 [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


## Комментарии


Данное событие используется для обработки событий объектов, загруженных
 в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm). Событие генерируется,
 если свойству [EnableDocumentEvents](../../Interface/IOleDocumentBox/IOleDocumentBox.EnableDocumentEvents.htm)
 установлено значение True.


## Пример


Пример использования события приведен в описании свойства [IOleDocumentBoxEventArgs.DispId](../../Interface/IOleDocumentBoxEventArgs/IOleDocumentBoxEventArgs.DispId.htm).


См. также:


[OleDocumentBox](OleDocumentBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
