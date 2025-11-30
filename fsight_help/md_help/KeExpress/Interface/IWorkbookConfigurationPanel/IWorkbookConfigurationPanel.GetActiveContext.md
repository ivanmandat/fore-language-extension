# IWorkbookConfigurationPanel.GetActiveContext

IWorkbookConfigurationPanel.GetActiveContext
-


# IWorkbookConfigurationPanel.GetActiveContext


## Синтаксис


GetActiveContext: [ISystemPadContext](../ISystemPadContext/ISystemPadContext.htm);


## Описание


Метод GetActiveContext возвращает
 контекст компонента WorkbookConfigurationPanel.


## Комментарии


Для определения источника данных компонента WorkbookConfigurationPanel
 используйте свойство [IWorkbookConfigurationPanel.Analyzer](IWorkbookConfigurationPanel.Analyzer.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 WorkbookConfigurationPanel с наименованием «WorkbookConfigurationPanel1»
 и компонент UiErAnalyzer с наименованием «UiErAnalyzer1». Укажите компонент
 «UiErAnalyzer1» в качестве источника данных для компонента «WorkbookConfigurationPanel1».
 В качестве источника данных для компонента «UiErAnalyzer1» используйте
 рабочую книгу.


Пример является обработчиком события OnClick для формы.


	Sub WORKBOOKCONFIGURATIONPANELFormOnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	Begin

	    sps := WorkbookConfigurationPanel1.GetActiveContext;

	    Debug.WriteLine(sps.SystemPadId);

	End Sub WORKBOOKCONFIGURATIONPANELFormOnClick;


При нажатии на форму в консоль будет выведен идентификатор компонента
 боковой панели - WBDataView.


См. также:


[IWorkbookConfigurationPanel](IWorkbookConfigurationPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
