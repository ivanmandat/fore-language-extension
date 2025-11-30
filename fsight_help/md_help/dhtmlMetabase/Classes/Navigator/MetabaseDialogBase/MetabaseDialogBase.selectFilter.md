# MetabaseDialogBase.selectFilter

MetabaseDialogBase.selectFilter
-


**


# MetabaseDialogBase.selectFilter


## Синтаксис


selectFilter(filter: Object);


## Параметры


*filter.* Фильтр, который требуется установить в качестве текущего.
 Параметр содержит поле Filters, которое является массивом элементов перечисления
 PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm),
 и поле ResourceKey, содержащее ключ ресурса для получения наименования
 фильтра;


## Описание


Метод selectFilter** устанавливает
 указанный фильтр в качестве текущего в базовом диалоге с репозиторием.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase.htm)
 с наименованием «metabaseDialogBase» (см. «[Пример
 создания компонента MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase_Example.htm)»). Удалим все фильтры из диалога,
 а затем добавим новый фильтр и сделаем его текущим:


// Удалим все фильтры у диалога
metabaseDialogBase.clearFiltersSet()
for (var i = 0; i lt; metabaseDialogBase.getFiltersSet(); i++) {
    metabaseDialogBase.removeFilter(i);
}
console.log("Количество фильтров после очистки: " + metabaseDialogBase.getFiltersSet().length);
// Создадим фильтр для отображения регламентных отчётов
var filter = {
    Filters: [2562], // Фильтр для регламентных отчётов
    // Ключ ресурса для получения наименования фильтра
    ResourceKey: "openDialogReports"
};
// Добавим данный фильтр и сделаем его текущим
metabaseDialogBase.addFilter(filter, 1, false);
console.log("Количество фильтров после добавления: " + metabaseDialogBase.getFiltersSet().length);
// Сделаем данный фильтр текущим
metabaseDialogBase.selectFilter(filter);
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
