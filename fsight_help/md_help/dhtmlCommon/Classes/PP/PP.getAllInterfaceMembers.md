# PP.getAllInterfaceMembers

PP.getAllInterfaceMembers
-


# PP.getAllInterfaceMembers


## Синтаксис


getAllInterfaceMembers(intfs: Array);


## Параметры


*intfs.* Массив интерфейсов, члены которых нужно получить.


## Описание


Метод getAllInterfaceMembers возвращает массив членов интерфейсов.


## Комментарии


Метод возвращает массив JSON-объектов со следующими свойствами: Name - наименование члена интерфейса, Type - его тип, задаваемый с помощью перечисления [PP.ClassMembers](../../Enums/ClassMembers.htm).


Во возвращаемое значение метода включаются также члены базовых интерфейсов.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Определим свойства, методы и события интерфейса PP.ISourceView:


// Объявим массив свойств, методов и событий
var properties = [],
    methods = [],
    events = [];
// Получим все члены интерфейса PP.ISourceView
var members = PP.getAllInterfaceMembers([PP.ISourceView]);
for (i = 0; i < members.length; i++) {
    // Выполним обход по всем членам интерфейса
    var member = members[i].Name;
    switch (members[i].Type) {
        case PP.ClassMembers.Property:
            /* Если текущий член интерфейса - свойство,
               то добавим его в массив свойств */
            properties.push(member);
            break;
        case PP.ClassMembers.Method:
            /* Если текущий член интерфейса - метод,
               то добавим его в массив методов */
            methods.push(member);
            break;
        case PP.ClassMembers.Event:
            /* Если текущий член интерфейса - событие,
               то добавим его в массив событий */
            events.push(member);
            break;
    };
};
// Выведим наименования свойств, методов и событий интерфейса
console.log("Свойства: " + properties.toString());
console.log("Методы: " + methods.toString());
console.log("События: " + events.toString());

В результате выполнения примера в консоль браузера были выведены свойства, методы и события, объявленные в интерфейсе PP.ISourceView:


Свойства: Source

Методы: refreshAll,refresh

События: PropertyChanged,RequestMetadata


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
