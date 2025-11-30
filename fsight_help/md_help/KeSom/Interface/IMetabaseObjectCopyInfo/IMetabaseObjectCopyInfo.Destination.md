# IMetabaseObjectCopyInfo.Destination

IMetabaseObjectCopyInfo.Destination
-


# IMetabaseObjectCopyInfo.Destination


## Синтаксис


Destination: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Destination определяет
 объект-контейнер, в который осуществляется копирование/перемещение.


## Комментарии


В качестве объекта-контейнера могут задаваться следующие объекты: Репозиторий
 НСИ, База данных временных рядов, Контейнер моделирования, Сборка. Также
 объектом-контейнером может выступать любой объект [пользовательского
 класса](../IMetabaseCustomObject/IMetabaseCustomObject.htm). При этом копируемый/перемещаемый объект станет внутренним
 объектом (не будет отображаться в навигаторе объектов) относительно указываемого
 объекта пользовательского класса.


Примечание.
 Проверка на возможность копирования/перемещения под объект определенного
 класса должна осуществляться в прикладном коде.


После вызова метода [IMetabase.CopyObject](../IMetabase/IMetabase.CopyObject.htm)
 в свойстве Destination будет содержаться описание полученной копии объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJTEST и папки с идентификатором F_COPY.


Добавьте ссылку на системную сборку Metabase.


	Sub CopyObject;

	Var

	    MB: IMetabase;

	    CInfo: IMetabaseObjectCopyInfo;

	Begin

	    MB := MetabaseClass.Active;

	    CInfo := MB.CreateCopyInfo;

	    CInfo.Id := MB.GenerateId("OBJTEST");

	    CInfo.Name := "Копия объекта OBJTEST";

	    CInfo.WithData := True;

	    CInfo.Destination := MB.ItemById("F_COPY");

	    CInfo.Source := MB.ItemById("OBJTEST");

	    MB.CopyObject(CInfo);

	End Sub CopyObject;


При выполнения примера произойдет копирование объекта с идентификатором
 OBJTEST в указанную папку репозитория. Новый объект получит наименование
 «Копия объекта OBJTEST», идентификатор будет сгенерирован автоматически.
 Объект будет скопирован вместе с данными.


См. также:


[IMetabaseObjectCopyInfo](IMetabaseObjectCopyInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
