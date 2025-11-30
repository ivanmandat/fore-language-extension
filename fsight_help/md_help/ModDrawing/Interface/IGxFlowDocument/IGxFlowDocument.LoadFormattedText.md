# IGxFlowDocument.LoadFormattedText

IGxFlowDocument.LoadFormattedText
-


# IGxFlowDocument.LoadFormattedText


## Синтаксис


LoadFormattedText(Text: String);


## Параметры


Text. Строка в формате RTF.


## Описание


Метод LoadFormattedText загружает
 строку в поле форматированного текста.


## Пример


Для выполнения примера предполагается наличие:


	- объекта класса UiReport с идентификатором «UiReport1», настроенного
	 на регламентный отчет;


	- объекта класса ReportBox с идентификатором «ReportBox1», настроенного
	 на «UiReport1»;


	- первый объект отчета должен быть форматированным текстом.


Подключите системные сборки: Report, Tab, Drawing, Forms, Metabase.
 Добавьте событие кнопки:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Rep: IPrxReport;

	    Doc: IPrxFlowDocument;

	    Text: String;

	    Rect: IGxRectF;

	    Obj: ITabObject;

	    Objs: ITabObjects;

	    TS: ITabSheet;

	Begin

	    Rep := UiReport1.Report;

	    // Получим текущий форматированный текст

	    TS := (Rep.ActiveSheet As IPrxTable).TabSheet;

	    Objs := TS.Objects;

	    Doc := Objs.Item(0).Extension As IPrxFlowDocument;

	    Text := Doc.SaveFormattedText;

	    Rect := New GxRectF.Create(0, 0, 50, 50);

	    // Создадим новый форматированный текст

	    Obj := Objs.Add("PrxFlowDocument", Rect);

	    Doc := Objs.Item(1).Extension As IPrxFlowDocument;

	    Doc.LoadFormattedText(Text);

	End Sub Button1OnClick;


В результате выполнения примера будет создана копия форматированного
 текста.


См. также:


[IGxFlowDocument](IGxFlowDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
