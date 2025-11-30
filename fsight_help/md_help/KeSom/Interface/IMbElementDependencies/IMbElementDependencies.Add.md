# IMbElementDependencies.Add

IMbElementDependencies.Add
-


# IMbElementDependencies.Add


## Синтаксис


Add(Value: [IMbElementDependencyTemplate](../IMbElementDependencyTemplate/IMbElementDependencyTemplate.htm)):
 Integer;


## Параметры


Value - шаблон, на основании
 которого осуществляется добавление новой зависимости объекта репозитория
 от элементов справочника НСИ.


## Описание


Метод Add осуществляет создание
 новой записи о зависимости на основании информации, передаваемой в шаблоне.


## Комментарии


Если коллекция зависимостей получена для какого-либо объекта, то шаблон,
 передаваемый посредством параметра Value,
 может не содержать информацию об объекте. Информация будет автоматически
 подтягиваться из информации о шаблоне, доступной в свойстве [Where](IMbElementDependencies.Where.htm).


## Пример


Пример использования данного метода приведен в примере для конструктора
 [MbElementDependencyTemplateClass.Create](../../Class/MbElementDependencyTemplateClass/MbElementDependencyTemplateClass.Create.htm).


См. также:


[IMbElementDependencies](IMbElementDependencies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
