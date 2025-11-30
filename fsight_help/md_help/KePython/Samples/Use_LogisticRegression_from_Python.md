# Работа с методами интеллектуального анализа данных: Python

Работа с методами интеллектуального анализа данных: Python
-


# Работа с методами интеллектуального анализа данных


Язык Python имеет множество дополнительных модулей, которые позволяют
 разрабатывать программы различного спектра задач. Рассмотрим работу с
 методами интеллектуального анализа данных на примере расчёта логистической
 регрессии в функции на языке Python.


Для языка Python дополнительно потребуется установка библиотеки для
 машинного обучения Scikit-Learn ([https://scikit-learn.org](https://scikit-learn.org))
 и библиотеки для работы с многомерными массивами NumPy ([http://www.numpy.org/](http://www.numpy.org/)).


Код модуля на языке Python:


import numpy as np


from sklearn.linear_model import LogisticRegression


from sklearn.metrics import confusion_matrix


class CData(object):


def __init__(self, p1, p2, p3, p4):


self.PredictY = p1.tolist()


self.PredictTest = p2.tolist()


self.Intercept = p3


self.ConfMatr = p4.tolist()


def execute_lr(pX, pY, pXt):


X = np.array(pX)


Y = np.array(pY)


Xt = np.array(pXt)


LR=LogisticRegression(solver='liblinear', tol=1e-5)


LR.fit(X, Y)


intercept=LR.intercept_


predictY=LR.predict(X)


predictTest=LR.predict(Xt)


ConfMatrix=confusion_matrix(Y, predictY)


sz = CData(predictY, predictTest, intercept[0], ConfMatrix)

return sz


Функция execute_lr осуществляет расчёт методом логистической регрессии.
 В качестве входных параметров функции передаются массивы обучающих данных
 и массив тестовых данных. В качестве результата функция возвращает объект
 класса CData, который в атрибутах будет содержать результаты классификации
 на обучающем и тестовом множестве, константу регрессии и матрицу несоответствий.


Для выполнения функции execute_lr в Fore предполагается наличие модуля
 Python с наименованием LogisticRegression. Модуль должен располагаться
 в папке «D:\Work\Python\».


			Sub Main;

Var

    PyUtils: IPythonUtils;

    PylistX1, PyListY1, PyListX1test: IPythonList;

    PyClassObj: IPythonClassObject;

    PyObj: IPythonObject;

    Param1, Param2: Array Of Variant;

    X, Y, Xt: Array;

    i, j: Integer;

    Intercept: Double;

    RowCount, ColCount, RowCountTest: Integer;

    vrnt: Variant;

    str: String;

Begin

    PyUtils := New PythonUtils.Create;

    PyUtils.AddFolderToPythonPath("D:\Work\Python\");

    //Создание множеств

    RowCount := 12;

    RowCountTest := 6;

    ColCount := 4;

    X := New Variant[RowCount, ColCount];

    Y := New Variant[RowCount];

    Xt := New Variant[RowCountTest, ColCount];

    //Обучающее множество

    X[0, 0] := 5.1; X[0, 1] := 3.5;     X[0, 2]:= 1.4;      X[0, 3]:= 0.2;      Y[0]:= 0;

    X[1, 0] := 4.9; X[1, 1] := 3.0;     X[1, 2]:= 1.4;      X[1, 3]:= 0.2;      Y[1]:= 0;

    X[2, 0] := 4.7; X[2, 1] := 3.2;     X[2, 2]:= 1.3;      X[2, 3]:= 0.2;      Y[2]:= 0;

    X[3, 0] := 4.6; X[3, 1] := 3.1;     X[3, 2]:= 1.5;      X[3, 3]:= 0.2;      Y[3]:= 0;

    X[4, 0] := 7.0; X[4, 1] := 3.2;     X[4, 2]:= 4.7;      X[4, 3]:= 1.4;      Y[4]:= 1;

    X[5, 0] := 6.4; X[5, 1] := 3.2;     X[5, 2]:= 4.5;      X[5, 3]:= 1.5;      Y[5]:= 1;

    X[6, 0] := 6.9; X[6, 1] := 3.1;     X[6, 2]:= 4.9;      X[6, 3]:= 1.5;      Y[6]:= 1;

    X[7, 0] := 5.5; X[7, 1] := 2.3;     X[7, 2]:= 4.0;      X[7, 3]:= 1.3;      Y[7]:= 1;

    X[8, 0] := 6.3; X[8, 1] := 3.3;     X[8, 2]:= 6.0;      X[8, 3]:= 2.5;      Y[8]:= 2;

    X[9, 0] := 5.8; X[9, 1] := 2.7;     X[9, 2]:= 5.1;      X[9, 3]:= 1.9;      Y[9]:= 2;

    X[10, 0] := 7.1; X[10, 1] := 3.0;   X[10, 2]:= 5.9;     X[10, 3]:= 2.1;     Y[10]:= 2;

    X[11, 0] := 6.3; X[11, 1] := 2.9;   X[11, 2]:= 5.6;     X[11, 3]:= 1.8;     Y[11]:= 2;

    //Тестовое множество

    Xt[0, 0] := 5.0; Xt[0, 1] := 3.6;   Xt[0, 2]:= 1.4;     Xt[0, 3]:= 0.2;

    Xt[1, 0] := 5.4; Xt[1, 1] := 3.9;   Xt[1, 2]:= 1.7;     Xt[1, 3]:= 0.4;

    Xt[2, 0] := 6.5; Xt[2, 1] := 2.8;   Xt[2, 2]:= 4.6;     Xt[2, 3]:= 1.5;

    Xt[3, 0] := 5.7; Xt[3, 1] := 2.8;   Xt[3, 2]:= 4.5;     Xt[3, 3]:= 1.3;

    Xt[4, 0] := 6.5; Xt[4, 1] := 3.0;   Xt[4, 2]:= 5.8;     Xt[4, 3]:= 2.2;

    Xt[5, 0] := 7.6; Xt[5, 1] := 3.0;   Xt[5, 2]:= 6.6;     Xt[5, 3]:= 2.1;

    //Создание списков Python

    PylistX1 := New PythonList.Create(X);

    PylistY1 := New PythonList.Create(Y);

    PyListX1test := New PythonList.Create(Xt);

    //Выполнение функции Python и получение результатов

    vrnt := PyUtils.Invoke("LogisticRegression", "execute_lr", PyListX1, PyListY1, PyListX1test);

    PyClassObj := vrnt As IPythonClassObject;

    //Извлекаем константу регрессии

    vrnt := PyClassObj.GetAttr("Intercept");

    Intercept := vrnt As Double;

    Debug.WriteLine("Константа регрессии: " + Intercept.ToString);

    //Извлекаем результат классификации на обучающем множестве

    vrnt := PyClassObj.GetAttr("PredictY");

    PyObj := vrnt As IPythonObject;

    Param1 := (vrnt As IPythonList).ToArray;

    Debug.WriteLine("Классификация на обучающем множестве:");

    For i := 0 To Param1.Length - 1 Do

        Debug.Write(i.ToString + ": " + Param1[i] + "; ");

    End For;

    Debug.WriteLine("");

    //Извлекаем результат классификации на тестовом множестве

    vrnt := PyClassObj.GetAttr("PredictTest");

    PyObj := vrnt As IPythonObject;

    Param1 := (vrnt As IPythonList).ToArray;

    Debug.WriteLine("Классификация на тестовом множестве:");

    For i := 0 To Param1.Length - 1 Do

        Debug.Write(i.ToString + ": " + Param1[i] + "; ");

    End For;

    Debug.WriteLine("");

    //Извлекаем матрицу

    Debug.WriteLine("Матрица несоответствий:");

    vrnt := PyClassObj.GetAttr("ConfMatr");

    Param2 := (vrnt As IPythonList).ToArray;

    For i := 0 To Param2.Length - 1 Do

        Param1 := (Param2[i] As IPythonList).ToArray;

        str := "";

        For j := 0 To Param1.Length - 1 Do

            str := str + (Param1[j] As Double).ToString + ' ';

        End For;

        Debug.WriteLine(str);

    End For;

End Sub Main;


При выполнении примера будет выполнена функция execute_lr, написанная
 на языке Python. В функцию будут переданы исходные данные и получен результат
 работы. В результате приходит объект класса CData, из атрибутов объекта
 будут считаны и выведены в консоль среды разработки полученные данные.


См. также:


[Примеры](Python_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
