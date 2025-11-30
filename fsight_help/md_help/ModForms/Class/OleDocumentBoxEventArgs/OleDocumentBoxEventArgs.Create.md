# OleDocumentBoxEventArgs.Create

OleDocumentBoxEventArgs.Create
-


# OleDocumentBoxEventArgs.Create


## Синтаксис


Create(DispId: Integer; Params: Array);


## Параметры


DispId. Идентификатор события,
 которое необходимо сгенерировать для объекта, загруженного в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


Params. Коллекция параметров
 события, которое будет генерироваться для объекта, загруженного в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


## Описание


Конструктор Create создает аргумент,
 описывающий событие, которое необходимо сгенерировать для загруженного
 в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm) объекта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента OleDocumentBox с наименованием
 OleDocumentBox1. В компонент OleDocumentBox загружен лист Microsoft Excel.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Arg: IOleDocumentBoxEventArgs;

	    Params: Array Of Variant;

	    Ole, Sheet, Range: Variant;

	Begin

	    Ole := OleDocumentBox1.OleObject;

	    Sheet := Ole.GetProperty("Application").GetProperty("ActiveSheet");

	    Range := Ole.GetProperty("Application").GetPropertyEx("Range", "A1");

	    Params := New Variant[2];

	    Params[0] := Sheet;

	    Params[1] := Range;

	    Arg := New OleDocumentBoxEventArgs.Create(1558, Params);

	    OleDocumentBox1.OnOleDocumentEvent(OleDocumentBox1, Arg);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для листа Microsoft Excel
 будет сгенерировано событие, происходящее при фокусировке курсора на ячейке
 А1. Данное событие можно обработать в событии [OnOleDocumentEvent](../OleDocumentBox/OleDocumentBox.OnOleDocumentEvent.htm)
 компонента OleDocumentBox1.


См. также:


[OleDocumentBoxEventArgs](OleDocumentBoxEventArgs.htm)
 | [OnOleDocumentEvent](../OleDocumentBox/OleDocumentBox.OnOleDocumentEvent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
