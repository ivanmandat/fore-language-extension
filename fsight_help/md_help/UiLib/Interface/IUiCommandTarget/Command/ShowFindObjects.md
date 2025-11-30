# ShowFindObjects

ShowFindObjects
-


# Команда ShowFindObjects


## Назначение


Поиск объектов репозитория в соответствии с указанными параметрами и
 вывод списка найденных объектов в навигаторе объектов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
		 Репозиторий, в котором будет производиться поиск.


		 Элемент 2: [IMetabaseObjectFindInfo](KeSom.chm::/Interface/IMetabaseObjectFindInfo/IMetabaseObjectFindInfo.htm)
		 Параметры поиска объектов репозитория.


		 Элемент 3: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Необязательный параметр, содержащий описание папки репозитория,
		 к которой будет переведен фокус в навигаторе объектов после поиска.
		 Если элемент не задан, то перевод фокуса в навигатор объектов
		 не производится.


## Особенности применения


Отсутствуют.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    FindInfo: IMetabaseObjectFindInfo;

    Data: Array;

Begin

    MB := MetabaseClass.Active;

    Target := WinApplication.Instance.GetPluginTarget("Std");

    Context := Target.CreateExecutionContext;

    FindInfo := MB.CreateFindInfo;

    FindInfo.Text := "report";

    FindInfo.AttributeEx := FindAttributeEx.Name Or FindAttributeEx.Ident;

    FindInfo.WholeWordsOnly := False;

    FindInfo.ScanNestedNamespaces := True;

    Data := New Variant[2];

    Data[0] := MB;

    Data[1] := FindInfo;

    Context.Data := Data;

    Target.Execute("ShowFindObjects", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет произведен поиск всех объектов, в наименовании
 или идентификаторе которых присутствует слово «report». Список найденных
 объектов будет доступен в окне «Результаты поиска» в навигаторе объектов.
 Переход к навигатору объектов после поиска не производится.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
