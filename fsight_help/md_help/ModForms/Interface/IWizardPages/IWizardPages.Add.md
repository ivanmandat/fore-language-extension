# IWizardPages.Add

IWizardPages.Add
-


# IWizardPages.Add


## Синтаксис


Add(Sheet: [IWizardPage](../IWizardPage/IWizardPage.htm));


## Параметры


Sheet. Входной параметр, определяющий добавляемую
 страницу.


## Описание


Метод Add осуществляет добавление
 страницы в коллекцию страниц мастера.


## Комментарии


Страница передается в качестве входного параметра Sheet. Все добавляемые
 страницы помещаются в конец коллекции.


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

    Lab.Text := "Последняя страница";

    Lab.Parent := PageWiz;

    Wizard1.Pages.Add(PageWiz);

End Sub Button1OnClick;


После нажатия на кнопку Button1 в мастер будет добавлена страница, на
 которой будет содержаться надпись "Последняя страница".


См. также:


[IWizardPages](IWizardPages.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
