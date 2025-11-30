# ISolrFields.Remove

ISolrFields.Remove
-


# ISolrFields.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемого поля.


## Описание


Метод Remove удаляет поле из
 коллекции по индексу и возвращает признак удачного удаления.


## Комментарии


Список полей, которые используются при индексации и поиске, определяется
 в конфигурационном файле. В виду отсутствия прямого доступа к конфигурационным
 файлам Apache Solr из Fore для
 изменения списка полей необходимо отредактировать файлы вручную. Более
 подробно об изменении списка читайте в подразделе «[Системные и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)».


Метод Remove используется если
 из конфигурационного файла были удалены какие-либо пользовательские поля,
 но они еще не были удалены из настроек поискового сервиса.


Для автоматической синхронизации списка полей в настройках экземпляра
 Solr в соответствии с конфигурационным файлом используйте метод [ISolrSearchEngineSchema.FillSchemaOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.FillSchemaOptions.htm).


## Пример


Пример работы с коллекцией ISolrFields приведён в описании свойства
 [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm).


См. также:


[ISolrFields](ISolrFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
