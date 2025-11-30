# Wizard.CancelButtonClicked

Wizard.CancelButtonClicked
-


# Wizard.CancelButtonClicked


## Синтаксис


CancelButtonClicked: function (sender. args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CancelButtonClicked
 наступает при нажатии на кнопку «Отмена».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» (см. «[Пример
 создания компонента ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Добавим обработчики событий
 CancelButtonClicked и [Closed](Wizard.Closed.htm):


importDataWizard.CancelButtonClicked.add(function ()


{


    if (importDataWizard.getSteps()[0].getIsComplete()
 == false) alert("Настройка
 на шаге 1 не завершена")


});


importDataWizard.Closed.add(function
 ()


{


    if (importDataWizard.getSteps()[0].getIsRequired()
 == true) alert("Шаг
 1 является обязательным")


});


После выполнения примера при нажатии на кнопку «Отмена», если настройка
 на первом шаге не была завершена, на экран будет выведено соответствующее
 сообщение.


При закрытии мастера, если первый шаг является обязательным, на экран
 будет выведено соответствующее сообщение.


См. также:


[Wizard](Wizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
