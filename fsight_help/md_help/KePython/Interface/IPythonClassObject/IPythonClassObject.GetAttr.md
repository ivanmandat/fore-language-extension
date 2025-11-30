# IPythonClassObject.GetAttr

IPythonClassObject.GetAttr
-


# IPythonClassObject.GetAttr


## Синтаксис


		GetAttr(AttrName: String): Variant;


## Параметры


AttrName. Наименование аргумента
 класса. Наименование является регистрозависимым.


## Описание


Метод GetAttr получает значение
 аргумента с указанным наименованием у экземпляра класса.


## Комментарии


Если у экземпляра класса не существует аргумента с наименованием AttrName, то генерируется исключительная
 ситуация.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализован
 следующий класс:


class Door:


def __init__(self, color, height, width):


self.color = color


self.height = height


self.width = width


def getDoorDescription(self, comment):


return comment + ". Цвет: " + self.color + " Размеры: " + str(self.height) + "X" + str(self.width) + " мм."


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pObj: IPythonClassObject;

		    Result: Variant;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Создание объекта класса Door

		    pObj := New PythonClassObject.Create("sample", "Door", "Red", 2000, 800);

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


	- Создаётся экземпляр класса Door. В конструктор передаются значения
	 параметров, которые будут присвоены атрибутам.


	- У созданного объекта будет получено значение атрибута «color».
	 Значение будет выведено в консоль среды разработки.


	- Для атрибута «color» будет задано новое значение.


	- Будет выполнена функция экземпляра класса «getDoorDescription»,
	 полученный результат будет выведен в консоль среды разработки.


См. также:


[IPythonClassObject](IPythonClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
