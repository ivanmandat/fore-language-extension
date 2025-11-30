# DimSrv.copyInstance

DimSrv.copyInstance
-


# DimSrv.copyInstance


## Синтаксис


copyInstance(dim: PP.Mb.DimSource, callback: Function
 | PP.Delegate);


## Параметры


dim. Справочник;


callback. Функция обратного
 вызова.


## Описание


Метод copyInstance копирует
 справочник.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Получим идентификатор моникёра скопированного справочника:


// Получаем идентификатор нового моникёра справочника
var func = function(sender, args) {
    console.log("Идентификатор нового моникёра: " + JSON.parse(args.ResponseText).ChangeDimSelectionResult.id);
}
dimService.copyInstance(dim, func);
Идентификатор нового моникёра:


BEOPPLHHCLIHEOAELCMBNAMOHGFMOHMELJFGGDLLHLMFPGGH!M!S!SAHFHLDNLCLIHEOAEIACNMHOKCKPMJBFEDIGEBIPLEOCKHNEM


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
