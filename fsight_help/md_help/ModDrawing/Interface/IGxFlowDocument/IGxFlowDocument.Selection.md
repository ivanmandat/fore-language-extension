# IGxFlowDocument.Selection

IGxFlowDocument.Selection
-


# IGxFlowDocument.Selection


## Синтаксис


Selection: IGxFlowDocumentSelection;


## Описание


Свойство Selection определяет
 выделенную часть строки в поле форматированного текста.


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

    Sel: IGxFlowDocumentSelection;

    Objs: ITabObjects;

    TS: ITabSheet;

Begin

    Rep := UiReport1.Report;

    TS := (Rep.ActiveSheet As IPrxTable).TabSheet;

   Objs := TS.Objects;

    // Получим текущий форматированный текст

    Doc := Objs.Item(0).Extension As IPrxFlowDocument;

    Sel := Doc.Selection;

    // Зададим жирность выделенному тексту

    Sel.IsBold := True;

End Sub Button1OnClick;


В результате выполнения примера к выделенному тексту будет применено
 форматирование.


См. также:


[IGxFlowDocument](IGxFlowDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
