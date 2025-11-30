# WizardPage.OnPageAccessible

WizardPage.OnPageAccessible
-


# WizardPage.OnPageAccessible


## Синтаксис


OnPageAccessible(Sender: Object; Args: [ICancelEventArgs](../../Interface/ICancelEventArgs/ICancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnPageAccessible наступает
 при проверке страницы на доступность.


## Комментарии


Недоступная страница в компоненте [WizardSplash](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/WizardSplash.htm)
 подсвечивается серым цветом и выбор данной страницы запрещен. С помощью
 свойства [Allowed](../../Interface/ICancelEventArgs/ICancelEventArgs.Allowed.htm)
 аргумента события можно определить доступность страницы.


## Пример


Для выполнения примера предполагается наличие формы, компонента Wizard
 с несколькими страницами и компонента WizardSplash.


			Sub WizardPage1OnPageAccessible(Sender: Object; Args: ICancelEventArgs);

Begin

    Args.Allowed := False;

End Sub WizardPage1OnPageAccessible;


После выполнения примера при запуске формы все страницы, для которых
 в качестве обработчика события OnPageAccessible указана данная процедура,
 в компоненте WizardSplash будут подсвечены серым цветом и доступ к ним
 будет запрещен.


См. также:


[WizardPage](WizardPage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
