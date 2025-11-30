# IMbElementDependenciesDatabase.Update

IMbElementDependenciesDatabase.Update
-


# IMbElementDependenciesDatabase.Update


## Синтаксис


Update(Value: [IMbElementDependencies](../IMbElementDependencies/IMbElementDependencies.htm));


## Параметры


Value - зависимости, информацию
 о которых необходимо обновить в базе репозитория.


## Описание


Метод Update осуществляет обновление
 информации о зависимостях в базе репозитория.


## Комментарии


Если для указанных зависимостей указан шаблон отбора [IMbElementDependencies.Where](../IMbElementDependencies/IMbElementDependencies.Where.htm),
 то соответствующие записи будут удалены. После удаления будет добавлена
 информация о передаваемых зависимостях.


## Пример


Пример использования данного метода приведен в примере для конструктора
 [MbElementDependencyTemplateClass.Create](../../Class/MbElementDependencyTemplateClass/MbElementDependencyTemplateClass.Create.htm).


См. также:


[IMbElementDependenciesDatabase](IMbElementDependenciesDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
