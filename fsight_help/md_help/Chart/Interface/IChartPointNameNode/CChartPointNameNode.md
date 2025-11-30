# Описание пользовательского класса CChartPointNameNode

Описание пользовательского класса CChartPointNameNode
-


# Описание пользовательского класса CChartPointNameNode


Данный класс используется в описании примеров использования интерфейса
 [IChartPointNameNode](IChartPointNameNode.htm).


	Public Class CChartPointNameNode: Object, IChartPointNameNode

	    Private m_Level: Integer;

	    Private m_Format: String = "";

	    Private m_Required: Boolean = False;

	    Private m_Values: ArrayList;

	    Private m_PointIndexes: ArrayList;

	    Private m_Parent: CChartPointNameNode;

	    Private m_Sub: CChartPointNameNode;

	    Private m_Count: Integer = 0;

	    Private m_Name: String;


	    Public Constructor Create(Parent: CChartPointNameNode);

	    Begin

	        If Parent <> Null Then

	            If Parent.m_Sub <> Null Then

	                Parent.m_Sub.m_Parent := Null;

	                Parent.m_Sub.ResetLevel;

	            End If;

	            Parent.m_Sub := Self;

	        End If;

	        m_Parent := Parent;

	        ResetLevel;

	        m_Values := New ArrayList.Create;

	        m_PointIndexes := New ArrayList.Create;

	    End Constructor Create;


	    Private Sub ResetLevel;

	    Begin

	        If m_Parent <> Null Then

	            m_Level := m_Parent.Level + 1;

	            Elsem_Level := 0;

	        End If;

	        If m_Sub <> Null Then

	            m_Sub.ResetLevel;

	        End If;

	    End Sub ResetLevel;


	    Private Function get_Level: Integer;

	    Begin

	        Return m_Level;

	    End Function get_Level;


	    Private Function get_Format: String;

	    Begin

	        Return m_Format;

	    End Function get_Format;


	    Private Sub set_Format(Value: String);

	    Begin

	        m_Format := Value;

	    End Sub set_Format;


	    Private Function get_Name: String;

	    Begin

	        Return m_Name;

	    End Function get_Name;


	    Private Sub set_Name(Value: String);

	    Begin

	        m_Name := Value;

	    End Sub set_Name;


	    Private Function get_Required: Boolean;

	    Begin

	        Return m_Required;

	    End Function get_Required;


	    Private Sub set_Required(Value: Boolean);

	    Begin

	        m_Required := Value;

	    End Sub set_Required;


	    Private Function get_Count: Integer;

	    Begin

	        Return m_Count;

	    End Function get_Count;


	    Private Function get_Value(Index: Integer): Variant;

	    Begin

	        Return m_Values(Index);

	    End Function get_Value;


	    Private Function get_PointIndex(Index: Integer): Integer;

	    Begin

	        Return m_PointIndexes(Index) As Integer;

	    End Function get_PointIndex;


	    Public Sub AddValue(PointIndex: Integer; Value: Variant);

	    Begin

	        m_PointIndexes.Add(PointIndex);

	        m_Values.Add(Value);

	        m_Count := m_Count + 1;

	    End Sub AddValue;


	    Public Sub Clear;

	    Begin

	        m_PointIndexes.Clear;

	        m_Values.Clear;

	        m_Count := 0;

	    End Sub Clear;


	    Private Function get_SubLevel: IChartPointNameNode;

	    Begin

	        Return m_Sub As IChartPointNameNode;

	    End Function get_SubLevel;


	    Public Property Level: Integer Get get_Level;

	    Public Property Format: String Get get_Format Set set_Format;

	    Public Property Required: Boolean Get get_Required Set set_Required;

	    Public Property Count: Integer Get get_Count;

	    Public Property Value(Index: Integer): Variant Get get_Value;

	    Public Property PointIndex(Index: Integer): Integer Get get_PointIndex;

	    Public Property SubLevel: IChartPointNameNode Get get_SubLevel;

	    Public Property Name: String Get get_Name Set set_Name;

	End Class CChartPointNameNode;


См. также:


[IChartPointNameNode](IChartPointNameNode.htm)
 | [UiChart.OnGetPointNameRoot](../../Class/UiChart/UiChart.OnGetPointNameRoot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
