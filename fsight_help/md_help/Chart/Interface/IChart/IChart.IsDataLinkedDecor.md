# IChart.IsDataLinkedDecor

IChart.IsDataLinkedDecor
-


# IChart.IsDataLinkedDecor


## Синтаксис


IsDataLinkedDecor: Boolean;


## Описание


Свойство IsDataLinkedDecor определяет
 признак привязки оформления ряда к источнику данных.


## Комментарии


По умолчанию свойство имеет значении False.


## Пример


Предполагается наличие экспресс-отчета с идентификатором «Obj_1». На
 форму добавьте кнопку с идентификатором «Button1».


Для выполнения примера добавьте ссылки на системные сборки «Chart»,
 «Metabase» и «Express».


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    chart:IChart;

    an:IEaxAnalyzer;

    mb:Imetabase;

Begin

    Mb:= MetabaseClass.Active;

    an:= Mb.ItemById("OBJ_1").Edit As IEaxAnalyzer;

    chart:=an.Sheets.Item(0).Analyzer.Chart As IChart;

    chart.IsDataLinkedDecor:= True;


    (an As IMetabaseObject).Save;

End Sub Button1OnClick;


После выполнения примера оформление рядов будет привязано к источнику
 данных. При удалении ряда из отметки и повторном добавлении в отметку
 будет использовано оформление, установленное до удаления ряда.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
