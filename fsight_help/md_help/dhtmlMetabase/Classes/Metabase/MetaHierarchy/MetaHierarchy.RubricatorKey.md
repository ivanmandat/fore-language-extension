# MetaHierarchy.RubricatorKey

MetaHierarchy.RubricatorKey
-


# MetaHierarchy.RubricatorKey


## Синтаксис


RubricatorKey: Number;


## Описание


Свойство RubricatorKey определяет
 ключ каталога показателей в метабазе.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, получить экземпляр рабочей книги из базы данных временных рядов
 (см. «[MetaHierarchy.ChildEls](MetaHierarchy.ChildEls.htm)»)
 и в обработчике события открытия документа добавить следующий код:


console.log("Получаем ключ каталога показателей в метабазе");
var rubKey = hie.getRubricatorKey();
console.log(rubKey);

После выполнения примера в консоль браузера будет выведен ключ каталога
 показателей в метабазе:


112


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
