# WizardStep.StateToggled

WizardStep.StateToggled
-


# WizardStep.StateToggled


## Синтаксис


StateToggled: function (sender. args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие StateToggled наступает,
 когда становится доступна кнопка мастера «Далее».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» (см. «[Пример
 создания компонента ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Добавим обработчик события
 StateToggled для первого шага
 мастера:


var step1
 = importDataWizard.getSteps()[0];


step1.StateToggled.add(function
 (sender, args)


{


    if
 (step1.getWereSettingsChanged() == true)
 alert("Настройки были изменены")


});


После выполнения примера, после того, как станет доступна кнопка «Далее»
 первого шага мастера, на экран будет выведено сообщение «Настройки были
 изменены» (если кнопка «Далее» на первом шаге активируется только после
 изменения настроек).


См. также:


[WizardStep](WizardStep.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
