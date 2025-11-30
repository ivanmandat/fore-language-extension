# CrossDatabaseMappingsDialog.RequestMetadata

CrossDatabaseMappingsDialog.RequestMetadata
-


**


# CrossDatabaseMappingsDialog.RequestMetadata


## Синтаксис


RequestMetadata(sender: Object, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии. Параметр содержит объект типа [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm), у которого свойство Metadata содержит поле RubKey - ключ эталонной базы данных временных рядов.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике диалога сопоставления атрибутов в рабочей книге.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [CrossDatabaseMappingsDialog](../../../Components/TimeSeries/CrossDatabaseMappingsDialog/CrossDatabaseMappingsDialog.htm) с наименованием «crossDatabaseMappingsDialog» (см. «[Пример создания компонента CrossDatabaseMappingsDialog](../../../Components/TimeSeries/CrossDatabaseMappingsDialog/CrossDatabaseMappingsDialog_Example.htm)»), а также помимо текущей должна существовать база данных временных рядов с ключом 3014. Обработаем событие RequestMetadata и изменим текущую эталонную базу данных на базу с ключом 3014:


// Обработаем событие RequestMetadata
crossDatabaseMappingsDialog.RequestMetadata.add(function (sender, args) {
    console.log("Ключ эталонной базы данных: " + args.getMetadata().RubKey);
});
// В качестве эталонной установим базу данных с ключом 3014
var state = {
    comparatorRubKey: 3014
};
// Зададим для диалога новые настройки
crossDatabaseMappingsDialog.setCurrentState(state);

В результате выполнения примера в консоли браузера в качестве эталонной была установлена база данных временных рядов с ключом 3014. При этом было вызвано событие RequstMetadata, после обработки которого в консоли браузера был выведен ключ изменившейся эталонной базы данных:


Ключ эталонной базы данных: 3014


См. также:


[CrossDatabaseMappingsDialog](CrossDatabaseMappingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
