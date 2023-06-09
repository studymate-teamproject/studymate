var $searchGroupInput = $('.group-search input');
var $groupaAlign01 = $('.align01');
var $groupAlign02 = $('.align02');
var $GroupDelete = $('.group-delete');
var $groupFilter = $('.filter');

var groupTmp;

var page;

var total = $('.cafe-count').text();


var rowCount = 21;

var pageCount = 5;

var startRow = (parseInt(page) - 1) * rowCount;

var endPage = parseInt(Math.ceil(parseInt(page) / parseFloat(pageCount)) * pageCount);

var startPage = endPage - (pageCount - 1);

var realEndPage = parseInt(Math.ceil(total / parseFloat(rowCount)));

var endPage = endPage > realEndPage ? realEndPage : endPage;


if(groupTmp == 1){
	$groupaAlign01.children().css('color', '#000000');
	$groupaAlign01.children('material-symbols-outlined').css('color', '#65619E');
	$groupAlign02.children().css('color', '#bdbdbd');
}

if(groupTmp == 2){
	$groupAlign02.children().css('color', '#000000');
	$groupAlign02.children('material-symbols-outlined').css('color', '#65619E');
	$groupaAlign01.children().css('color', '#bdbdbd');
}



// 검색창 클릭 시 css 변화
$searchGroupInput.on('focus', function() {
	$('.group-search .material-symbols-outlined').css('color', '#65619E')
	$(this).css('border', '1px solid #65619E');
});
$searchGroupInput.on('blur', function() {
	$('.group-search .material-symbols-outlined').css('color', '#bdbdbd')
	$(this).css('border', '1px solid #bdbdbd');
});

// 정렬 버튼 클릭 시 css 변화
$groupaAlign01.on('click', function() {
	$.ajax({
		type: "GET", //전송방식을 지정한다 (POST,GET)
		url: '/admin/adminGroupListOk.ad',//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
		dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
		error: function() {
			alert("통신실패!!!!");
		},
		success: function(Parse_data) {
			$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
			//alert("통신 데이터 값 : " + Parse_data);
		}

	});
	groupTmp = 1;
})

$groupAlign02.on('click', function() {
	$.ajax({
		type: "GET", //전송방식을 지정한다 (POST,GET)
		url: '/admin/adminGroupListOk.ad?order=desc',//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
		dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
		error: function() {
			alert("통신실패!!!!");
		},
		success: function(Parse_data) {
			$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
			//alert("통신 데이터 값 : " + Parse_data);
		}

	});
	groupTmp = 2;
})




console.log(groupTmp);
$(document).each(function() {
	$('.group-list').on('click', '.delete', function() {
		/*var isDelete = confirm('해당 회원 데이터를 삭제하시겠습니까?');
		console.log($(this).prop("id"));
		if (isDelete == true) {
			$(this).parent().parent().hide();
		}*/
		let groupNumber = $(this).prop("id");
		console.log(groupNumber);
		$.ajax({
			type: "GET",
			url: "/admin/adminGroupDeleteOk.ad",
			data: { groupNumber: groupNumber },
			success: function() {
				//alert("통신성공");
				location.reload();
			},
			error: function() {
				alert("통신 실패");
			}
		});
	})
});


// 필터 버튼 클릭 시 드롭다운 div 생성
$('html').click(function(e) {
	if ($(e.target).hasClass('filter') || $(e.target).hasClass('filter-click')) {
		$('.filter-field').css('display', 'block');
	} else {
		$('.filter-field').css('display', 'none');
	}
});



//페이징 버튼
$('#paging').on('click', ".prev", function() {
	if (groupTmp == 1 || groupTmp == undefined) {

		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?page=' + (startPage-1),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				//alert("통신 데이터 값 : " + Parse_data);
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
			}

		});
	} else if (groupTmp == 2) {
		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?order=desc&page=' + (startPage-1),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				//alert("통신 데이터 값 : " + Parse_data);
			}

		});
	}else {
		var memberNickName = $('.group-search > form > input').val();
	console.log(memberNickName);
	$.ajax({
			type: "GET",
			url: "/admin/adminGroupSearchOk.ad?page=" + (startPage - 1),
			data: { memberNickName : memberNickName },
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				$('.group-search > form > input').val(memberNickName);
			},
			error: function() {
				alert("통신 실패");
			}
		});
	}
});

$('#paging').on('click', ".pageBtn", function() {

	page = $(this).text().trim()


	console.log($(this).text().trim());
	if (groupTmp == 1 || groupTmp == undefined) {

		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?page=' + $(this).text().trim(),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				//alert("통신 데이터 값 : " + Parse_data);
			}

		});
	} else if (groupTmp == 2) {
		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?order=desc&page=' + $(this).text().trim(),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				//alert("통신 데이터 값 : " + Parse_data);
			}

		});
	} else {
		var memberNickName = $('.group-search > form > input').val();
	console.log(memberNickName);
	$.ajax({
			type: "GET",
			url: "/admin/adminGroupSearchOk.ad?page=" + $(this).text().trim() ,
			data: { memberNickName : memberNickName },
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				$('.group-search > form > input').val(memberNickName);
			},
			error: function() {
				alert("통신 실패");
			}
		});
	}
	
});


//next
$('#paging').on('click', ".next", function() {
	if (groupTmp == 1 || groupTmp == undefined) {

		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?page=' + (endPage + 1),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				//alert("통신 데이터 값 : " + Parse_data);
			}

		});
	} else if (groupTmp == 2) {
		$.ajax({
			type: "GET", //전송방식을 지정한다 (POST,GET)
			url: '/admin/adminGroupListOk.ad?order=desc&page=' + (endPage + 1),//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
			error: function() {
				alert("통신실패!!!!");
			},
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				//alert("통신 데이터 값 : " + Parse_data);
			}

		});
	}else {
		var memberNickName = $('.group-search > form > input').val();
	console.log(memberNickName);
	$.ajax({
			type: "GET",
			url: "/admin/adminGroupSearchOk.ad?page=" + (endPage + 1),
			data: { memberNickName : memberNickName },
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				$('.group-search > form > input').val(memberNickName);
			},
			error: function() {
				alert("통신 실패");
			}
		});
	}
});

/*검색*/
$('.group-search > form > button').on('click' ,function(){
	var memberNickName = $('.group-search > form > input').val();
	console.log(memberNickName);
	$.ajax({
			type: "GET",
			url: "/admin/adminGroupSearchOk.ad?search=search",
			data: { memberNickName : memberNickName },
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				$('.group-search > form > input').val(memberNickName);
			},
			error: function() {
				alert("통신 실패");
			}
		});
		groupTmp = 3;
})



//셀렉트 검색

$('.filter-field > ul > li').on("click",function(){
	var listText = $(this).text();
	
	$.ajax({
			type: "GET",
			url: "/admin/adminGroupListOk.ad",
			data: { listText : listText },
			success: function(Parse_data) {
				$("#list-content").html(Parse_data); //div에 받아온 값을 넣는다.
				$('.filter-search').text(listText);
				//alert("통신 데이터 값 : " + Parse_data);
			},
			error: function() {
				alert("통신 실패");
			}
		});
});




















