# IEaxConfigurationPanel.Analyzer

IEaxConfigurationPanel.Analyzer
-


# IEaxConfigurationPanel.Analyzer


## Синтаксис


Analyzer: [IEaxAnalyzerSource](../IEaxAnalyzerSource/IEaxAnalyzerSource.htm);


## Описание


Свойство Analyzer определяет
 источник данных для компонента.


## Комментарии


В качестве источника данных может быть установлен только [UiErAnalyzer](../../../uidevenv/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm).


## Пример


Для выполнения примера на форме предполагается наличие компонента EaxConfigurationPanel с наименованием
 «EaxConfigurationPanel1» и компонента UiErAnalyzer с
 наименованием «UiErAnalyzer1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EaxConfigurationPanel1.Analyzer := UiErAnalyzer1 As IEaxAnalyzerSource;

	End Sub Button1OnClick;


После выполнения примера UiErAnalyzer1 будет установлен в качестве
 источника для EaxConfigurationPanel1.


См. также:


[IEaxConfigurationPanel](IEaxConfigurationPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
