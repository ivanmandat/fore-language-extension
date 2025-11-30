# IMbElementDependentsDatabase.Update

IMbElementDependentsDatabase.Update
-


# IMbElementDependentsDatabase.Update


## Синтаксис


Update(Value: [IMbElementDependents](../IMbElementDependents/IMbElementDependents.htm));


## Параметры


Value. Зависимости, информацию
 о которых необходимо обновить.


## Описание


Метод Update обновляет информацию
 о зависимостях элементов справочников НСИ от объектов репозитория.


## Комментарии


Если для указанных зависимостей указан шаблон отбора [IMbElementDependents.Where](../IMbElementDependents/IMbElementDependents.Where.htm),
 то соответствующие записи будут удалены. После удаления будет добавлена
 информация о передаваемых зависимостях.


## Пример


Использование свойства приведено в примере для [IMbElementDependent.Dictionary](../IMbElementDependent/IMbElementDependent.Dictionary.htm).


См. также:


[IMbElementDependentsDatabase](IMbElementDependentsDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
