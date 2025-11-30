# Wizard.addStep

Wizard.addStep
-


# Wizard.addStep


## Синтаксис


addStep (step: PP.Ui.[WizardStep](../WizardStep/WizardStep.htm));


## Параметры


step. Шаг, который нужно добавить
 в мастер.


## Описание


Метод addStep добавляет [шаг](../WizardStep/WizardStep.htm)
 в мастер.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» (см. «[Пример
 создания компонента ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Удалим первый шаг мастера
 и добавим в мастер новый шаг:


importDataWizard.removeStep(importDataWizard.getSteps()[0]);//удаляем первый шаг мастера
var importStep = new PP.Mb.Ui.ImportColumnsStep(//создаем экземпляр класса PP.Mb.Ui.ImportColumnsStep
{
    CubeImport: importDataWizard.getCubeImport()
});
sourceStep.setStepSettings(importDataWizard.getWizardSettings());//устанавливаем для шага настройки мастера
importDataWizard.addStep(importStep );//добавляем шаг в мастер
sourceStep.show();//показываем шаг

После выполнения примера будет удален первый шаг мастера, а затем создан
 новый экземпляр класса PP.Mb.Ui.[ImportColumnsStep](dhtmlMetabase.chm::/Classes/Metabase/ImportColumnsStep/ImportColumnsStep.htm),
 добавлен в мастер и отображен.


См. также:


[Wizard](Wizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
