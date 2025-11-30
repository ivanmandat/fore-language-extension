# PythonClassObject.CreateFromModule

PythonClassObject.CreateFromModule
-


# PythonClassObject.CreateFromModule


## Синтаксис


CreateFromModule(ModuleId: String; ClassName: String;
 Params: Array);


## Параметры


ModuleId. Идентификатор модуля
 с кодом на Python в репозитории.


ClassName. Наименование класса.
 Наименование является регистрозависимым.


Params. Массив значений параметров,
 которые необходимо передать в конструктор класса.


## Описание


Конструктор CreateFromModule
 создаёт объект, который является экземпляром класса с указанным наименованием.


## Комментарии


Если в классе Python используется конструктор по умолчанию, то параметр
 Params можно не указывать.


## Пример


Для выполнения примера предполагается наличие в репозитории Python-модуля
 с идентификатором «MOD_PYT». В модуле реализован следующий класс:


class Door:


def __init__(self, color, height, width):


self.color = color


self.height = height


self.width = width


def getDoorDescription(self, comment):


return comment + ". Цвет: " + self.color + " Размеры: " + str(self.height) + "X" + str(self.width) + " мм."


Добавьте ссылки на системные сборки: Metabase, Python.


	Sub UserProc;

	Var

	    pObj: IPythonClassObject;

	    Result: Variant;

	Begin

	    //Создание объекта класса Door

	    pObj := New PythonClassObject.CreateFromModule("MOD_PYT", "Door", "Red", 2000, 800);

	    //Получить значение атрибута color

	    Result := pObj.GetAttr("color");

	    Debug.WriteLine(Result);

	    //Изменить значение атрибута color

	    pObj.SetAttr("color", "White");

	    //Выполнить функцию экземпляра класса

	    Result := pObj.Invoke("getDoorDescription", "Межкомнатная дверь");

	    Debug.WriteLine(Result);

	End Sub UserProc;


При запуске примера выполняются следующие действия:


	- Создаётся экземпляр класса Door, код которого сохранён в Python-модуле в репозитории. В конструктор передаются значения параметров,
	 которые будут присвоены атрибутам.


	- У созданного объекта будет получено значение атрибута «color».
	 Значение будет выведено в консоль среды разработки.


	- Для атрибута «color» будет задано новое значение.


	- Будет выполнена функция экземпляра класса «getDoorDescription»,
	 полученный результат будет выведен в консоль среды разработки.


См. также:


[PythonClassObject](PythonClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
