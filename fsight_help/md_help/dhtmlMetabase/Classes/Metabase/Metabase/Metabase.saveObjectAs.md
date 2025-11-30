# Metabase.saveObjectAs

Metabase.saveObjectAs
-


# Metabase.saveObjectAs


## Синтаксис


saveObjectAs (mbObject, overrideOrparentKey, name,
 id, operation, withData, permanent, keepMoniker, callback)


## Параметры


mbObject. Объект для сохранения
 - PP.Mb.[Object](../Object/Object.htm);


parentKey. Ключ родительского
 объекта;


name. Имя нового объекта;


id. Идентификатор нового объекта;


operation. Операция, которая
 будет выполняться, элемент перечисления PP.Mb.[ObjectCopyOperation](../../../Enums/ObjectCopyOperation.htm);


withData. Определяет, будет
 ли объект сохраняться вместе с данными;


permanent. Определяет, будет
 ли создаваться постоянный объект. Если установлено значение true,
 то созданный объект сразу будет сохранен в репозитории, если установлено
 значение false, то после выполнения
 метода будет создана заготовка с описанием объекта;


keepMoniker. Определяет, будет
 ли обновляться моникер;


callback. Процедура обратного
 вызова.


## Описание


Метод saveObjectAs используется
 для сохранения объекта в новый объект.


## Пример


Для выполнения примера предполагается наличие на странице [соединения
 с репозиторием](Metabase.htm) с наименованием «metabase» и модели экспресс-отчета с
 наименованием «eaxAnalyzer» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откройте отчет на редактирование,
 внесите изменения и сохраните копию объекта вместе с изменениями:


metabase.saveObjectAs(eaxAnalyzer, 267782,
 "Копия отчета", eaxAnalyzer.getId()
 + "_MYCOPY",


PP.Mb.[ObjectCopyOperation](../../../Enums/ObjectCopyOperation.htm).CreateNew,
 true, true,
 true, function
 (sender, args)


{


    res = JSON.parse(args.ResponseText).SaveObjectAsResult;


    console.log(res)


})


После выполнения примера в папке репозитория с ключом 267782 будет создана
 копия объекта «eaxAnalyzer» с наименованием «Копия отчета» и идентификатором
 «<идентификатор копируемого объекта>_MYCOPY». После выполнения метода
 в консоль браузера будет выведен объект с описанием созданной копии.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
