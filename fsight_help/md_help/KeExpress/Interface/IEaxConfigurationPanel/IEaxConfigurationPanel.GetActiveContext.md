# IEaxConfigurationPanel.GetActiveContext

IEaxConfigurationPanel.GetActiveContext
-


# IEaxConfigurationPanel.GetActiveContext


## Синтаксис


GetActiveContext: [ISystemPadContext](../ISystemPadContext/ISystemPadContext.htm);


## Описание


Метод GetActiveContext возвращает
 контекст компонента EaxConfigurationPanel.


## Комментарии


Для определения источника данных компонента [EaxConfigurationPanel](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxConfigurationPanel.htm)
 используйте свойство [IEaxConfigurationPanel.Analyzer](IEaxConfigurationPanel.Analyzer.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 EaxConfigurationPanel с наименованием «EaxConfigurationPanel1» и компонент
 UiErAnalyzer с наименованием «UiErAnalyzer1». Укажите компонент «UiErAnalyzer1»
 в качестве источника данных для компонента «EaxConfigurationPanel1». В
 качестве источника данных для компонента «UiErAnalyzer1» используйте экспресс-отчет.


Пример является обработчиком события OnClick для формы.


	Sub EAXCONFIGURATIONPANELFormOnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	Begin

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    Debug.WriteLine(sps.SystemPadId);

	End Sub EAXCONFIGURATIONPANELFormOnClick;


При нажатии на форму в окно консоли будет выведен идентификатор компонента
 боковой панели - EaxDataSource.


См. также:


[IEaxConfigurationPanel](IEaxConfigurationPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
