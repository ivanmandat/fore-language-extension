# IWizardPages.Insert

IWizardPages.Insert
-


# IWizardPages.Insert


## Синтаксис


Insert(Index: Integer; Page: [IWizardPage](../IWizardPage/IWizardPage.htm));


## Параметры


Index. Параметр, определяющий
 индекс вставляемой в мастер страницы.


Page. Параметр, определяющий
 страницу, которая будет вставлена в компонент [Wizard](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Wizard.htm).


## Описание


Метод Insert вставляет страницу
 в указанную страницу мастера.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Wizard с наименованием
 Wizard1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    PageWiz: IWizardPage;

    Lab: ILabel;

Begin

    PageWiz := New WizardPage.Create;

    Lab := New Label.Create;

    Lab.Parent := PageWiz;

    Lab.Text := "Первая страница";

    Wizard1.Pages.Insert(0, PageWiz);

End Sub Button1OnClick;


После нажатия на кнопку в мастер будет вставлена первая страница, на
 которой будет содержаться надпись "Первая страница".


См. также:


[IWizardPages](IWizardPages.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
