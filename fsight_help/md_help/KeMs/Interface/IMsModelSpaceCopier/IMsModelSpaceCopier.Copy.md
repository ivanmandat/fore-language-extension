# IMsModelSpaceCopier.Copy

IMsModelSpaceCopier.Copy
-


# IMsModelSpaceCopier.Copy


## Синтаксис


Copy;


## Описание


Метод Copy выполняет копирование контейнера моделирования.


## Комментарии


Для корректного выполнения копирования необходимо задать значения свойств [IMsModelSpaceCopier.DestinationModelSpace](IMsModelSpaceCopier.DestinationModelSpace.htm) и [IMsModelSpaceCopier.SourceModelSpace](IMsModelSpaceCopier.SourceModelSpace.htm).


## Пример


Для выполнения примера предполагается наличие контейнера моделирования с идентификатором «MS_SOURCE». Также необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    mb: IMetabase;

    CreateInfo: IMetabaseObjectCreateInfo;

    Copier: IMsModelSpaceCopier;

    MsDest, MsSource: IMetabaseObjectDescriptor;

Begin

    mb := MetabaseClass.Active;

// создаем результирующий контейнер моделирования
    CreateInfo := mb.CreateCreateInfo;

    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_MODELSPACE;
    MsDest := mb.CreateObject(CreateInfo);

// получаем исходный контейнер моделирования
    MsSource := mb.ItemById("MS_SOURCE");

// создаем объект, который будет копировать контейнеры
    Copier := New MsModelSpaceCopier.Create;

// задаем исходный и результирующий контейреры
    Copier.DestinationModelSpace := MsDest;

    Copier.SourceModelSpace := MsSource;

// задаем параметры копирования
    Copier.WithObjects := True;

    Copier.WithObjectsData := False;

// выполняем копирование
    Copier.Copy;

    Debug.WriteLine("Контейнер '" + MsSource.Name +

        "' скопирован в контейнер '" + MsDest.Name + "' с объектами, но без данных");

End Sub UserProc;


После выполнения примера будет осуществлено копирование контейнера моделирования «MS_SOURCE» с объектами, но без данных. Информация об этом будет выведена в окно консоли.


См. также:


[IMsModelSpaceCopier](IMsModelSpaceCopier.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
