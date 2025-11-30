# EaxMdService.createCopy

EaxMdService.createCopy
-


**


# EaxMdService.createCopy


## Синтаксис


createCopy(report: [EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 parentKey: Number, name: String, id: Number, withSave: boolean, saveOperation,
 callback);


## Параметры


*report.* Исходный экспресс-отчет;


*parentKey.* Ключ родительской папки,
 в которую копируем экспресс-отчет;


*name.* Наименование нового экспресс-отчета;


*id.* Идентификатор создаваемого экспресс-отчета;


*withSave.* Признак того, что экспресс-отчет
 будет сохранен;


*saveOperation.* Операция сохранения, указывается с помощью элемента
 перечисления PP.Mb.[ObjectCopyOperation](dhtmlMetabase.chm::/Enums/ObjectCopyOperation.htm);


*callback.* Возвратная
 функция, которую необходимо вызвать после создания копии экспресс-отчета.


## Описание


Метод createCopy** создает
 копию экспресс-отчета.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). В репозитории должна существовать
 папка с ключом 109:


Создадим копию исходного экспресс-отчета:


// Объявляем возвратную функцию, вызываемую после создания копии экспресс-отчета.
var createCopyFunction = function (sender, args) {
    var source = args.Args && (args.Args.Document || args.Args.Report);
    if (source) {
        expressBox.setSource(source);
    }
};
// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Создаём копию экспресс-отчета
var newCopy = eaxMdService.createCopy(eaxAnalyzer, 109, "Новый_отчет", "EXP_DYN", true, PP.Mb.ObjectCopyOperation.CreateNew, PP.Delegate(createCopyFunction, expressBox, {
    Document: eaxAnalyzer
}));

В результате выполнения данного примера в папке с указанным ключом будет
 создания копия экспресс-отчета.


Далее выполним следующий код:


// Получим ключ копии экспресс-отчета
console.log("Ключ исходного экспресс-отчета: " + expressBox.getSource().getKey());
console.log("Ключ копии экспресс-отчета: " + newCopy.getKey());
console.log("Наименование копии экспресс-отчета: " + newCopy.getName());
В результате выполнения этого примера в консоли браузера будут выведены
 ключ и наименование созданной копии исходного экспресс-отчета, а
 также для сравнения - ключ исходного отчета:


Ключ исходного экспресс-отчета: 109

Ключ копии экспресс-отчета: 2667

Наименование копии экспресс-отчета: Новый_отчет


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
