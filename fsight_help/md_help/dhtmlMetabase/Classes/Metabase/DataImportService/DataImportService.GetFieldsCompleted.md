# DataImportService.GetFieldsCompleted

DataImportService.GetFieldsCompleted
-


# DataImportService.GetFieldsCompleted


## Синтаксис


GetFieldsCompleted: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие GetFieldsCompleted наступает
 после того, как заполнены поля таблицы из источника.


## Комментарии


Событие актуально для первой страницы мастера импорта данных.


Первая страница мастера - экземпляр класса PP.Mb.Ui.[ImportColumnsStep](../ImportColumnsStep/ImportColumnsStep.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 и сервиса для работы с импортом данных с наименованием «dataImportService»
 (см. «[Пример
 создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Добавим обработчик события
 GetFieldsCompleted:


dataImportService.GetFieldsCompleted.add(function (sender, args)


{


    alert("FieldsCompleted");


    dataImportService.[setHasHeader](DataImportService.setHasHeader.htm)(importDataWizard.getCubeImport(),
 "Text", false);


});


После выполнения примера при нажатии на кнопку «Загрузить»
 или при выборе другого табличного листа из раскрывающегося списка будет
 выдаваться сообщение «FieldsCompleted» и первая строка таблицы не будет
 рассматриваться как строка с заголовками.


См. также:


[NavigatorBox](../NavigatorBox/NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
