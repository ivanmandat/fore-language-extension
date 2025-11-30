# IEtlForeWizardPage.OnWizardNext

IEtlForeWizardPage.OnWizardNext
-


# IEtlForeWizardPage.OnWizardNext


## Синтаксис


OnWizardNext: Integer;


## Описание


Метод OnWizardNext определяет
 страницу, на которую будет осуществлен переход при нажатии на кнопку «Далее».


## Комментарии


В зависимости от указанного в методе целого числа, будет различаться
 переход на страницы мастера:


	- > 0. Переход на конкретную
	 страницу;


	- 0. Переход на предыдущую
	 страницу;


	- -1. Переход на текущую
	 страницу.


Для определения номера страницы, на которую будет осуществлен переход
 при нажатии на кнопку «Назад»,
 используйте [IEtlForeWizardPage.OnWizardBack](IEtlForeWizardPage.OnWizardBack.htm).


## Пример


Использование метода приведено в примере для [IEtlUserDataContainer.UserData](../IEtlUserDataContainer/IEtlUserDataContainer.UserData.htm).


См. также:


[IEtlForeWizardPage](IEtlForeWizardPage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
