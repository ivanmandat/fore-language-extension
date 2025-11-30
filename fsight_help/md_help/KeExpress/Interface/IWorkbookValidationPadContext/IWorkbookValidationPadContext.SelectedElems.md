# IWorkbookValidationPadContext.SelectedElems

IWorkbookValidationPadContext.SelectedElems
-


# IWorkbookValidationPadContext.SelectedElems


## Синтаксис


SelectedElems: [IMetabaseObjectDescriptors](KeSom.chm::/Interface/IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Свойство SelectedElems возвращает
 описания элементов, выделенных в дереве с правилами валидации.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkbookConfigurationPanel
 с наименованием «WorkbookConfigurationPanel1» и компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1». «UiErAnalyzer1» подключен к какой-либо
 рабочей книге и установлен в качестве источника данных для компонента
 «WorkbookConfigurationPanel1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Pad: ISystemPadContext;

    SelectedElems: IMetabaseObjectDescriptors;

    Desc: IMetabaseObjectDescriptor;

Begin

    Pad := WorkbookConfigurationPanel1.GetActiveContext;

    If Pad Is IWorkbookValidationPadContext Then

        SelectedElems := (Pad As IWorkbookValidationPadContext).SelectedElems;

        For Each Desc In SelectedElems Do

            Debug.WriteLine(Desc.Name + '(' + Desc.Id + ')');

        End For;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку осуществляется проверка: является ли открытая
 в текущий момент вкладка компонента вкладкой с деревом правил валидации.
 Если открыта вкладка с деревом правил валидации, то список выделенных
 в дереве элементов (наименования и идентификаторы) будет выведен в консоль
 среды разработки.


См. также:


[IWorkbookValidationPadContext](IWorkbookValidationPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
