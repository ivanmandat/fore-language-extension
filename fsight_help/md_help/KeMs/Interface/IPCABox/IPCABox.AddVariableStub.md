# IPCABox.AddVariableStub

IPCABox.AddVariableStub
-


# IPCABox.AddVariableStub


## Синтаксис


AddVariableStub(Stub: IVariableStub);


## Параметры


Stub. Переменная,
 которая будет использоваться при расчете метода главных компонент.


## Описание


Метод AddVariableStub осуществляет
 добавление в компонент переменной, которая будет использоваться при расчете
 метода главных компонент.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента PCABox с наименованием
 PCABox1. Компонент подключен к контейнеру моделирования, содержащему переменные
 с идентификаторами X1 и X2.


Пример является обработчиком события OnShow для формы.


Добавьте ссылки на системные сборки: Cubes, ExtCtrls, Forms, Metabase,
 Ms.


	Sub TsetFormOnShow(Sender: Object; Args: IEventArgs);

	Var

	    MB: IMetabase;

	    MS, VarObj: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MS := MB.ItemById("CONT_MODEL");

	    PCABox1.ModelSpace := MS.Bind As IMsModelSpace;

	    VarObj := MB.ItemByIdNamespace("X1", (MS As IMetabaseObject).Key);

	    PCABox1.AddVariableStub(VarObj.Bind As IVariableStub);

	    VarObj := MB.ItemByIdNamespace("X2", (MS As IMetabaseObject).Key);

	    PCABox1.AddVariableStub(VarObj.Bind As IVariableStub);

	End Sub TestFormOnShow;


После выполнения примера при выводе формы на экран компонент PCABox1
 будет подключен к контейнеру моделирования CONT_MODEL. В список переменных
 компонента будут загружены две переменные моделирования X1 и X2. С помощью
 данных переменных автоматически будет рассчитан метод главных компонент.


См. также:


[IPCABox](IPCABox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
