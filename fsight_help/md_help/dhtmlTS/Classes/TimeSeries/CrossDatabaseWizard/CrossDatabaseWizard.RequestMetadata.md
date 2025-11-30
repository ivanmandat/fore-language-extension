# CrossDatabaseWizard.RequestMetadata

CrossDatabaseWizard.RequestMetadata
-


**


# CrossDatabaseWizard.RequestMetadata


## Синтаксис


RequestMetadata(sender: Object, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии. Параметр содержит объект типа [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm), у которого свойство Metadata содержит поле RubKey - ключ эталонной базы данных временных рядов.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике мастера правила валидации данных путём их сравнения с базой данных временных рядов.


## Пример


Для выполнения примера необходимо наличие экземпляра класса [CrossDatabaseWizard](CrossDatabaseWizard.htm) с наименованием «crossDatabaseWizard» (см. «[Конструктор CrossDatabaseWizard](Constructor_CrossDatabaseWizard.htm)»). Обработаем событие RequestMetadata, выводя в консоли браузера ключ эталонной базы данных временных рядов:


crossDatabaseWizard.RequestMetadata.add(function (sender, args) {
    console.log("Ключ эталонной базы данных: " + args.getMetadata().RubKey);
});

Теперь нажмём на кнопку «Сопоставление атрибутов» и в раскрывающемся списке «Эталонная база данных» выберем любую другую базу данных, не являющуюся текущей для данной рабочей книги. После этого сработает событие RequestMetadata, а в консоли браузера будет выведен ключ указанной базы данных:


Ключ эталонной базы данных: 3014


См. также:


[CrossDatabaseWizard](CrossDatabaseWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
