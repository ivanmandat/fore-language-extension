# IUiErAnalyzer.ErAnalyzer

IUiErAnalyzer.ErAnalyzer
-


# IUiErAnalyzer.ErAnalyzer


## Синтаксис


ErAnalyzer: [IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm);


## Описание


Свойство ErAnalyzer определяет
 экспресс-отчет, реализуемый интерфейсом IEaxAnalyzer.


## Пример


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    UiErAnalyzer1.ErAnalyzer := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в качестве источника
 данных для компонента «UiErAnalyzer1» будет установлен экспресс-отчет
 с идентификатором EXPRESS_REPORT, после этого компонент будет активирован.


См. также:


[IUiErAnalyzer](IUiErAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
