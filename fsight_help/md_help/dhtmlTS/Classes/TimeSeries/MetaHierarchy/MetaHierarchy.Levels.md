# MetaHierarchy.Levels

MetaHierarchy.Levels
-


# MetaHierarchy.Levels


## Синтаксис


Levels: Array;


## Описание


Свойство Levels определяет массив уровней.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, получить экземпляр иерархии метаданных с наименованием «hie» (см. «[MetaHierarchy.ChildEls](MetaHierarchy.ChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


console.log("Получаем массив уровней");
var lvls = hie.getLevels();
console.log(lvls);

После выполнения примера в консоль браузера будет выведен массив уровней:


Object { id: "LEVEL" ;


         isLeaf: false;


         k: 1;


         n: "Период";


         vis: true. }


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
