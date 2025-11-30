# IUiErAnalyzerEventArgs.Dimension

IUiErAnalyzerEventArgs.Dimension
-


# IUiErAnalyzerEventArgs.Dimension


## Синтаксис


Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство Dimension возвращает
 справочник, сгенерировавший события [OnLayoutChanged](../../Class/UiErAnalyzer/UiErAnalyzer.OnLayoutChanged.htm)
 либо [OnSelectionChanged](../../Class/UiErAnalyzer/UiErAnalyzer.OnSelectionChanged.htm).


## Пример


	Sub UiErAnalyzer1OnLayoutChanged(Sender:IUiErAnalyzer; Args: IUiErAnalyzerEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.Dimension.Ident;

	End Sub UiErAnalyzer1OnLayoutChanged;


После наступления события в переменной «s» будет содержаться идентификатор
 справочника, который изменил свое расположение на панели измерений экспресс-отчета.


См. также:


[IUiErAnalyzerEventArgs](IUiErAnalyzerEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
