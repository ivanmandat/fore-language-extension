# CrossFrequencyWizard.RequestMetadata

CrossFrequencyWizard.RequestMetadata
-


**


# CrossFrequencyWizard.RequestMetadata


RequestMetadata(sender: Object, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике мастера для валидации данных путём сравнения уровней динамики их временных рядов.


## Пример


Для выполнения примера необходимо наличие на html-странице экземпляра класса [CrossFrequencyWizard](CrossFrequencyWizard.htm) с наименованием «crossFrequencyWizard» (см. [конструктор CrossFrequencyWizard](Constructor_CrossFrequencyWizard.htm)). Обработаем и вызовем событие RequestMetadata, выводя в консоли браузера сообщение о запросе метаданных:


// Обработаем событие RequestMetadata
crossFrequencyWizard.RequestMetadata.add(function (sender, args) {
    console.log("Запрос метаданных...");
});
// Вызовем данное событие
crossFrequencyWizard.RequestMetadata.fire(crossFrequencyWizard, null);

В результате выполнения примера в консоли браузера было выведено сообщение о запросе метаданных:


Запрос метаданных...


См. также:


[CrossFrequencyWizard](CrossFrequencyWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
