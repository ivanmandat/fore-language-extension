# IStandardCube.SetDefaultCallback

IStandardCube.SetDefaultCallback
-


# IStandardCube.SetDefaultCallback


## Синтаксис


		SetDefaultCallback(Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
		 Class_: String);


## Параметры


Module. Описание объекта репозитория,
 в котором имеется реализация класса.


Class_. Наименование класса,
 в котором осуществляется обработка процесса сохранения данных в куб.


## Описание


Метод SetDefaultCallback задаёт
 для куба обработчик процесса сохранения данных в куб.


## Комментарии


В параметре Class_ необходимо
 указать класс, который реализует методы интерфейса [ICubeSaveMatrixCallback](../ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.htm)
 или наследуется и переопределяет класс [CubeCallback](../../Class/CubeCallback/CubeCallback.htm).


После сохранения настроек куба установленный обработчик будет сохранён
 в метаданных куба и использоваться при каждом сохранении данных. Сохранение
 данных может производиться из визуального интерфейса при работе с кубом
 в таких инструментах, как «Аналитические
 запросы (OLAP)», «Аналитические
 панели» и другие. Также сохранение данных может осуществляться
 в прикладном коде с помощью методов интерфейса [ICubeInstanceStorage](../ICubeInstanceStorage/ICubeInstanceStorage.htm).
 Обработчик, задаваемый с помощью метода SetDefaultCallback,
 соответствует обработчику, который может быть указан в свойстве [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


В свойствах [DefaultCallbackModule](IStandardCube.DefaultCallbackModule.htm)
 и [DefaultCallbackClass](IStandardCube.DefaultCallbackClass.htm)
 в дальнейшем можно будет получить установленные модуль и класс.


Для сброса установленного обработчика выполните метод SetDefaultCallback,
 задав в качестве параметра Module
 значение Null, а в параметре Class_ - пустую строку ("").


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «STD_CUBE» и модуля с идентификатором «MOD_CALLBACK». В модуле реализован
 класс «TCubeSaveCallback», который используется для обработки процесса
 сохранения данных в куб. Пример кода класса приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cube: IStandardCube;

		Begin

		    Mb := Metabaseclass.Active;

		    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

		    Cube.SetDefaultCallback(Mb.ItemById("MOD_CALLBACK"), "TCubeSaveCallback");

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для указанного куба будет установлен обработчик
 процесса сохранения данных в куб.


См. также:


[IStandardCube](IStandardCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
