# MetabaseDialogBase.addFilter

MetabaseDialogBase.addFilter
-


**


# MetabaseDialogBase.addFilter


## Синтаксис


addFilter(filter: Object, index: Number, select:
 Boolean);


## Параметры


*filter.* Фильтр. Параметр
 содержит поле Filters, которое является массивом элементов перечисления
 PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm),
 и поле ResourceKey, содержащее ключ ресурса для получения наименования
 фильтра;


*index.*
 Позиция добавляемого фильтра в массиве;


*select.*
 Признак того, что добавляемый фильтр будет текущим.


## Описание


Метод addFilter** добавляет
 фильтр в базовый диалог с репозиторием.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase.htm)
 с наименованием «metabaseDialogBase» (см. «[Пример
 создания компонента MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase_Example.htm)»). Удалим все фильтры из диалога,
 а затем добавим новый фильтр и сделаем его текущим:


// Удалим все фильтры у диалога
metabaseDialogBase.clearFiltersSet()
console.log("Количество фильтров после очистки: " + metabaseDialogBase.getFiltersSet().length);
// Создадим фильтр для отображения регламентных отчётов
var filter = {
    Filters: [2562], // Фильтр для регламентных отчётов
    // Ключ ресурса для получения наименования фильтра
    ResourceKey: "openDialogReports"
};
// Добавим данный фильтр и сделаем его текущим
metabaseDialogBase.addFilter(filter, 1, true);
console.log("Количество фильтров после добавления: " + metabaseDialogBase.getFiltersSet().length);
// Получим текущий фильтр
var currentFilter = metabaseDialogBase.getCurrentFilter();
console.log("Текущий фильтр: " + PP.resourceManager.getString(currentFilter.ResourceKey).Content);

В результате выполнения примера из диалога сначала были удалены все
 фильтры, а затем был добавлен и сделан текущим новый, позволяющий отображать
 регламентные отчёты. Об этом свидетельствуют сообщения, выведенные в консоли
 браузера:


Количество фильтров после очистки: 0

Количество фильтров после добавления: 1

Текущий фильтр: Регламентные отчеты


См. также:


[MetabaseDialogBase](MetabaseDialogBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
